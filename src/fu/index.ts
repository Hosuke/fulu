// 落筆簿 · 逐符親筆之登記（符身不假手）
import type { 符筆具 } from '../fubi.js';
import type { 符條 } from '../fupu.js';

export type 符筆 = (bi: 符筆具, tiao: 符條) => void;

import { 泰嶽真形 } from './wuyue-tai.js';
import { 華嶽真形 } from './wuyue-hua.js';
import { 嵩嶽真形 } from './wuyue-song.js';
import { 衡嶽真形 } from './wuyue-hengnan.js';
import { 恆嶽真形 } from './wuyue-hengbei.js';
import { 入山符一 } from './rushan-1.js';
import { 入山符二 } from './rushan-2.js';
import { 入山符三 } from './rushan-3.js';
import { 入山符四 } from './rushan-4.js';
import { 入山符五 } from './rushan-5.js';
import { 複文天天 } from './fuwen-tiantian.js';
import { 複文見見 } from './fuwen-jianjian.js';
import { 複文四己 } from './fuwen-siji.js';
import { 複文天天因 } from './fuwen-tianyin.js';
import { 複文毛目 } from './fuwen-maomu.js';
import { 鎮宅口舌 } from './zhenzhai-koushe.js';
import { 鎮宅禍害 } from './zhenzhai-huohai.js';
import { 鎮宅刀兵 } from './zhenzhai-daobing.js';
import { 召雷飛符 } from './leifa-zhaolei.js';
import { 雷霆聞命符 } from './leifa-wenming.js';
import { 清微令符 } from './leifa-qingwei.js';
import { 衝命玉符 } from './leifa-chongming.js';

export const 落筆簿: Record<string, 符筆> = {
  'wuyue-tai': 泰嶽真形,
  'wuyue-hua': 華嶽真形,
  'wuyue-song': 嵩嶽真形,
  'wuyue-hengnan': 衡嶽真形,
  'wuyue-hengbei': 恆嶽真形,
  'rushan-1': 入山符一,
  'rushan-2': 入山符二,
  'rushan-3': 入山符三,
  'rushan-4': 入山符四,
  'rushan-5': 入山符五,
  'fuwen-tiantian': 複文天天,
  'fuwen-jianjian': 複文見見,
  'fuwen-siji': 複文四己,
  'fuwen-tianyin': 複文天天因,
  'fuwen-maomu': 複文毛目,
  'zhenzhai-koushe': 鎮宅口舌,
  'zhenzhai-huohai': 鎮宅禍害,
  'zhenzhai-daobing': 鎮宅刀兵,
  'leifa-zhaolei': 召雷飛符,
  'leifa-wenming': 雷霆聞命符,
  'leifa-qingwei': 清微令符,
  'leifa-chongming': 衝命玉符,
};
