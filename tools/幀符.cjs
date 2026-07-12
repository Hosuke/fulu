#!/usr/bin/env node

// 幀符 · 逐符 headless 截圖 CLI
// 用法：node tools/幀符.cjs [符id ...] [--寬 480]
const { existsSync } = require('fs');
const { join } = require('path');
const { pathToFileURL } = require('url');
const { 合幀, ROOT } = require('./lib/幀具.cjs');

function 讀參數(argv) {
  const ids = [];
  let 寬 = 480;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--寬') {
      if (i + 1 >= argv.length) throw new Error('--寬 後須給正整數');
      寬 = Number(argv[++i]);
    } else if (arg.startsWith('--寬=')) {
      寬 = Number(arg.slice('--寬='.length));
    } else if (arg.startsWith('--')) {
      throw new Error(`不識參數：${arg}`);
    } else {
      ids.push(arg);
    }
  }

  if (!Number.isInteger(寬) || 寬 <= 0) throw new Error('--寬 須為正整數');
  return { ids, 寬 };
}

async function 主() {
  const { ids, 寬 } = 讀參數(process.argv.slice(2));
  const 落筆路 = join(ROOT, 'dist/fu/index.js');
  if (!existsSync(落筆路)) {
    console.error('未見 dist/fu/index.js，先 npm run build');
    process.exitCode = 1;
    return;
  }

  const { 落筆簿 } = await import(pathToFileURL(落筆路).href);
  const 可用鍵 = Object.keys(落筆簿);
  let 待幀 = ids;

  if (ids.length === 0) {
    if (可用鍵.length === 0) {
      console.log('落筆簿空，無可幀');
      return;
    }
    待幀 = 可用鍵;
  } else {
    const 不存 = ids.filter(id => !Object.hasOwn(落筆簿, id));
    if (不存.length > 0) {
      console.error(`落筆簿無此鍵：${不存.join('、')}`);
      console.error(`可用鍵：${可用鍵.length > 0 ? 可用鍵.join('、') : '（無）'}`);
      process.exitCode = 1;
      return;
    }
  }

  for (const id of 待幀) {
    await 合幀({
      出: `圖錄/符/${id}.png`,
      幀: async page => page.evaluate(async ({ id, 寬 }) => {
        const { 落筆簿 } = await import('/dist/fu/index.js');
        const { 依號 } = await import('/dist/fupu.js');
        const { 執符筆, 符界 } = await import('/dist/fubi.js');
        const 條 = 依號[id];
        const 筆 = 落筆簿[id];
        if (!條) throw new Error(`符譜無此條：${id}`);
        if (!筆) throw new Error(`落筆簿無此筆：${id}`);

        const 幅比 = (條 && 條.幅比) || 3;
        const 紙寬px = Math.round(寬 * 0.78);
        const 邊 = Math.round(寬 * 0.11);
        const canvas = document.createElement('canvas');
        canvas.width = 寬;
        canvas.height = Math.round(邊 * 2 + 紙寬px * 幅比);
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('無法取得 2D canvas context');

        // 鐵律：此布保透明，destination-out 才能如法作用。
        ctx.strokeStyle = ctx.fillStyle = '#ece5d4';
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.save();
        const bi = 執符筆(ctx, { 中x: 寬 / 2, 頂y: 邊, 寬px: 紙寬px });
        符界(bi, 幅比);
        筆(bi, 條);
        ctx.restore();

        const 成布 = document.createElement('canvas');
        成布.width = canvas.width;
        成布.height = canvas.height;
        const 成ctx = 成布.getContext('2d');
        if (!成ctx) throw new Error('無法取得合幀 canvas context');
        成ctx.fillStyle = '#101014';
        成ctx.fillRect(0, 0, 成布.width, 成布.height);
        成ctx.drawImage(canvas, 0, 0);
        return 成布.toDataURL('image/png');
      }, { id, 寬 }),
    });
  }
}

主().catch(error => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
