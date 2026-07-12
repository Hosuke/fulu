export const 令書圈圖 = (bi) => {
    const u = bi.u;
    const cx = 0, cz = 12;
    // 五環（細筆圓）
    const c = bi.ctx;
    c.save();
    c.lineWidth = 0.42 * u;
    for (const r of [1.5, 2.5, 3.5, 4.5, 5.5])
        bi.A(cx, cz, r);
    c.restore();
    // 中樞（墨點＋小環暈）
    bi.dot(cx + 0.1, cz + 0.15, 0.6);
    c.save();
    c.lineWidth = 0.34 * u;
    bi.A(cx - 0.15, cz + 0.2, 1.0);
    c.restore();
    // 四曜墨點（北踞三環・西踞四環・東踞五環・南踞三環——依原刻方位）
    bi.dot(cx + 0.2, cz - 3.4, 0.55);
    bi.dot(cx - 4.45, cz + 0.4, 0.6);
    bi.dot(cx + 4.5, cz + 0.1, 0.55);
    bi.dot(cx - 0.1, cz + 3.35, 0.6);
    // 斜貫線（自左上外入，穿樞續至右下外環——依原刻全程）
    bi.一筆({ 寬: 0.5 * u, 起: '尖', 收: '出' }, p => p
        .M(cx - 6.8, cz - 7.2)
        .L(cx - 2.2, cz - 2.3)
        .C(cx - 1.2, cz - 1.2, cx + 1.2, cz + 1.3, cx + 2.6, cz + 2.7)
        .C(cx + 3.4, cz + 3.5, cx + 4.2, cz + 4.3, cx + 4.9, cz + 5.0));
};
