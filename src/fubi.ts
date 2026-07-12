// ─────────────────────────────────────────────────────────────────────────────
// 符筆 · Fubi —— 符書通形（符紙執筆之框；通形候考據立後乃增）
//
// 承 bi.ts（自粉本移植）之筆而改其錨：粉本錨於月輪心（頂沉 R·0.565），
// 符錨於紙——z 自紙頂 0 至紙末（fuge.段 為律），x 以紙中線為 0，
// 左緣 -紙.寬/2、右緣 +紙.寬/2。單位仍「指」：u = 紙寬px / 紙.寬。
// 之所以不改 bi.ts：執筆之頂沉為定值 R·0.565，先以 translate 消之，
// z=0 遂正落紙頂——bi.ts 一字不動，回流無涉。
//
// 硃層之制（CLAUDE.md）：白描庫以線密度代色，硃標識層留於 API——
// 執符筆可授硃色（陳列頁開之），無授則以淡墨代（dim 0.82）。
// ─────────────────────────────────────────────────────────────────────────────
import { 執筆, type 筆具 } from './bi.js';
import { 紙 } from './fuge.js';

// 符框：紙於畫布之位（畫布 px）。高由幅比出：高px = 寬px × 幅比。
export interface 符框 {
  中x: number;      // 紙中線之畫布橫座標
  頂y: number;      // 紙頂之畫布縱座標
  寬px: number;     // 紙寬（畫布 px）
  硃色?: string;    // 授之則硃層著色（陳列頁用）；無授則淡墨代之
}

// 路徑具：指座標之路（塊筆・鑿筆共用——僅記路，填描由呼者定）
export interface 路徑具 {
  M(x: number, z: number): 路徑具;
  L(x: number, z: number): 路徑具;
  Q(cx: number, cz: number, x: number, z: number): 路徑具;
  C(c1x: number, c1z: number, c2x: number, c2z: number, x: number, z: number): 路徑具;
  close(): 路徑具;
}

// 符筆具：於 筆具 之上增硃層與塊・鑿之筆
// 塊・鑿為真形圖之需：山體黑塊（塊）、水道白徑（鑿線——蔽法穿透）、
// 洞穴之孔（鑿）。鑿筆以 destination-out 行，故畫布必透明（勿鋪底之律）。
export interface 符筆具 extends 筆具 {
  硃: (fn: () => void) => void;                    // 硃層（密核・點竅之位）——標識層，非勸色
  塊: (書: (t: 路徑具) => void) => void;           // 閉路填墨（山體塊面）
  鑿: (書: (t: 路徑具) => void) => void;           // 蔽法填穿（孔竅）
  鑿線: (寬: number, 書: (t: 路徑具) => void) => void; // 蔽法線穿（白徑蜿蜒；寬以指計）
}

// 執符筆：於 ctx 現態上平移（呼者自 save/restore），返以紙頂為 z=0 之筆。
// 執筆(ctx,R) 之 Y(z) = -R·0.565 + z·u，故先移 +R·0.565，z=0 乃落 頂y。
export function 執符筆(ctx: CanvasRenderingContext2D, 框: 符框): 符筆具 {
  const u = 框.寬px / 紙.寬;
  const R = u / 0.0145;                       // 反解執筆之 u = R·0.0145
  ctx.translate(框.中x, 框.頂y + R * 0.565);
  const bi = 執筆(ctx, R);
  const 硃 = (fn: () => void) => {
    ctx.save();
    try {
      if (框.硃色) { ctx.strokeStyle = 框.硃色; ctx.fillStyle = 框.硃色; fn(); }
      else bi.dim(0.82, fn);
    } finally { ctx.restore(); }
  };
  // 路徑具：指→畫布之換（x·u，Y(z)），僅記路不落墨
  const 路: 路徑具 = {
    M(x, z) { ctx.moveTo(x * bi.u, bi.Y(z)); return 路; },
    L(x, z) { ctx.lineTo(x * bi.u, bi.Y(z)); return 路; },
    Q(cx, cz, x, z) { ctx.quadraticCurveTo(cx * bi.u, bi.Y(cz), x * bi.u, bi.Y(z)); return 路; },
    C(c1x, c1z, c2x, c2z, x, z) {
      ctx.bezierCurveTo(c1x * bi.u, bi.Y(c1z), c2x * bi.u, bi.Y(c2z), x * bi.u, bi.Y(z));
      return 路;
    },
    close() { ctx.closePath(); return 路; },
  };
  const 塊 = (書: (t: 路徑具) => void) => { ctx.beginPath(); 書(路); ctx.fill(); };
  // 鑿筆切 destination-out，callback 拋錯亦必 restore——蔽法態不得洩漏（Codex 審 2026-07-12）
  const 鑿 = (書: (t: 路徑具) => void) => {
    ctx.save();
    try {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath(); 書(路); ctx.fill();
    } finally { ctx.restore(); }
  };
  const 鑿線 = (寬: number, 書: (t: 路徑具) => void) => {
    ctx.save();
    try {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 寬 * bi.u; ctx.lineJoin = ctx.lineCap = 'round';
      ctx.beginPath(); 書(路); ctx.stroke();
    } finally { ctx.restore(); }
  };
  return { ...bi, 硃, 塊, 鑿, 鑿線 };
}

// 卵：橢圓之路（四絡貝茲，kappa 法），塊・鑿共用。傾＝弧度，繞 (x,z) 旋。
// 真形圖內核（圓核・卵核・竅孔）之通路。
export function 卵(t: 路徑具, x: number, z: number, rx: number, rz: number, 傾 = 0): void {
  const k = 0.5522847498;
  const c = Math.cos(傾), s = Math.sin(傾);
  const p = (lx: number, lz: number): [number, number] =>
    [x + lx * c - lz * s, z + lx * s + lz * c];
  const [ax, az] = p(rx, 0), [bx, bz] = p(0, rz), [cx2, cz2] = p(-rx, 0), [dx, dz] = p(0, -rz);
  const [c1x, c1z] = p(rx, rz * k), [c2x, c2z] = p(rx * k, rz);
  const [c3x, c3z] = p(-rx * k, rz), [c4x, c4z] = p(-rx, rz * k);
  const [c5x, c5z] = p(-rx, -rz * k), [c6x, c6z] = p(-rx * k, -rz);
  const [c7x, c7z] = p(rx * k, -rz), [c8x, c8z] = p(rx, -rz * k);
  t.M(ax, az)
    .C(c1x, c1z, c2x, c2z, bx, bz)
    .C(c3x, c3z, c4x, c4z, cx2, cz2)
    .C(c5x, c5z, c6x, c6z, dx, dz)
    .C(c7x, c7z, c8x, c8z, ax, az)
    .close();
}

// 符界：紙緣淡描（陳列與自校之用，非符之筆）。幅比＝高/寬，豎條之基為 3。
export function 符界(bi: 筆具, 幅比 = 紙.高 / 紙.寬): void {
  const 半 = 紙.寬 / 2, 高 = 紙.寬 * 幅比;
  bi.dim(0.35, () => bi.thin(() => bi.P([[-半, 0], [半, 0], [半, 高], [-半, 高]], true)));
}
