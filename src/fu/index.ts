// 落筆簿 · 逐符親筆之登記（符身不假手）
import type { 符筆具 } from '../fubi.js';
import type { 符條 } from '../fupu.js';

export type 符筆 = (bi: 符筆具, tiao: 符條) => void;

import { 泰嶽真形 } from './wuyue-tai.js';
import { 華嶽真形 } from './wuyue-hua.js';
import { 嵩嶽真形 } from './wuyue-song.js';
import { 衡嶽真形 } from './wuyue-hengnan.js';
import { 恆嶽真形 } from './wuyue-hengbei.js';

export const 落筆簿: Record<string, 符筆> = {
  'wuyue-tai': 泰嶽真形,
  'wuyue-hua': 華嶽真形,
  'wuyue-song': 嵩嶽真形,
  'wuyue-hengnan': 衡嶽真形,
  'wuyue-hengbei': 恆嶽真形,
};
