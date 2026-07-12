// 落筆簿 · 逐符親筆之登記（符身不假手）
import type { 筆具 } from '../bi.js';
import type { 符條 } from '../fupu.js';

export type 符筆 = (bi: 筆具, tiao: 符條) => void;
export const 落筆簿: Record<string, 符筆> = {
  // 'wuyue-zhenxing-dong': 東嶽真形, …（考據＋落筆後登記）
};
