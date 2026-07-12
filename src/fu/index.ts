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
import { 入山符乙一 } from './rushan-yi-1.js';
import { 入山符乙二 } from './rushan-yi-2.js';
import { 陳安世符一 } from './chenanshi-1.js';
import { 陳安世符二 } from './chenanshi-2.js';
import { 老君神印 } from './laojun-shenyin.js';
import { 入山符丙一 } from './rushan-bing-1.js';
import { 入山符丙二 } from './rushan-bing-2.js';
import { 入山符丙三 } from './rushan-bing-3.js';
import { 入山符丙四 } from './rushan-bing-4.js';
import { 入山符丙五 } from './rushan-bing-5.js';
import { 佩帶符一 } from './peidai-1.js';
import { 佩帶符二 } from './peidai-2.js';
import { 佩帶符三 } from './peidai-3.js';
import { 敕字式 } from './chiling-chi.js';
import { 天字式 } from './chiling-tian.js';
import { 剛字式 } from './chiling-gang.js';
import { 大字式 } from './chiling-da.js';
import { 聖字式 } from './chiling-sheng.js';
import { 鬼字式 } from './chiling-gui.js';
import { 天剛聚形 } from './chiling-tiangang.js';
import { 三光聚形 } from './sanguang-ju.js';
import { 三光散形 } from './sanguang-san.js';
import { 煞字式 } from './chiling-sha.js';
import { 複文天天 } from './fuwen-tiantian.js';
import { 複文見見 } from './fuwen-jianjian.js';
import { 複文四己 } from './fuwen-siji.js';
import { 複文天天因 } from './fuwen-tianyin.js';
import { 複文毛目 } from './fuwen-maomu.js';
import { 複文地地子 } from './fuwen-didizi.js';
import { 複文六天 } from './fuwen-liutian.js';
import { 複文同單 } from './fuwen-tongdan.js';
import { 複文生朱 } from './fuwen-shengzhu.js';
import { 複文大子 } from './fuwen-dazi.js';
import { 鎮宅口舌 } from './zhenzhai-koushe.js';
import { 鎮宅禍害 } from './zhenzhai-huohai.js';
import { 鎮宅刀兵 } from './zhenzhai-daobing.js';
import { 鎮宅東方 } from './zhenzhai-dong.js';
import { 鎮宅南方 } from './zhenzhai-nan.js';
import { 鎮宅西方 } from './zhenzhai-xi.js';
import { 鎮宅北方 } from './zhenzhai-bei.js';
import { 鎮宅中央 } from './zhenzhai-zhong.js';
import { 鎮宅凶殃 } from './zhenzhai-xiongyang.js';
import { 鎮宅鎮凶 } from './zhenzhai-zhenxiong.js';
import { 鎮宅牛馬 } from './zhenzhai-niuma.js';
import { 鎮宅招金 } from './zhenzhai-zhaojin.js';
import { 鎮宅風火 } from './zhenzhai-fenghuo.js';
import { 鎮宅盜賊 } from './zhenzhai-daozei.js';
import { 鎮宅水潦 } from './zhenzhai-shuilao.js';
import { 鎮宅雞夜 } from './zhenzhai-jiye.js';
import { 鎮宅不宜 } from './zhenzhai-buyi.js';
import { 鎮宅時氣 } from './zhenzhai-shiqi.js';
import { 鎮宅橫損 } from './zhenzhai-hengsun.js';
import { 鎮宅亡失 } from './zhenzhai-wangshi.js';
import { 鎮宅惡鬼 } from './zhenzhai-egui.js';
import { 鎮宅養蠶 } from './zhenzhai-yangcan.js';
import { 鎮宅牲畜 } from './zhenzhai-shengchu.js';
import { 鎮宅飛尸 } from './zhenzhai-feishi.js';
import { 鎮宅惡夢 } from './zhenzhai-emeng.js';
import { 鎮宅比符 } from './zhenzhai-bifu.js';
import { 鎮宅宜官 } from './zhenzhai-yiguan.js';
import { 鎮宅伏尸 } from './zhenzhai-fushi.js';
import { 鎮宅不侵 } from './zhenzhai-buqin.js';
import { 鎮宅家鬼 } from './zhenzhai-jiagui.js';
import { 鎮宅疾病 } from './zhenzhai-jibing.js';
import { 鎮宅龍神 } from './zhenzhai-longshen.js';
import { 鎮宅經求 } from './zhenzhai-jingqiu.js';
import { 鎮宅犬雞 } from './zhenzhai-quanji.js';
import { 鎮宅金銀 } from './zhenzhai-jinyin.js';
import { 鎮宅蛇蟲 } from './zhenzhai-shechong.js';
import { 鎮宅保宅 } from './zhenzhai-baozhai.js';
import { 鎮宅神祠 } from './zhenzhai-shenci.js';
import { 鎮宅熒星 } from './zhenzhai-yingxing.js';
import { 鎮宅發狂 } from './zhenzhai-fakuang.js';
import { 鎮宅官刑 } from './zhenzhai-guanxing.js';
import { 鎮宅老樹 } from './zhenzhai-laoshu.js';
import { 鎮宅鬼恠 } from './zhenzhai-guiguai.js';
import { 鎮宅驚恐 } from './zhenzhai-jingkong.js';
import { 鎮宅淫祠 } from './zhenzhai-yinci.js';
import { 鎮宅三光 } from './zhenzhai-sanguangfu.js';
import { 鎮宅蛀煞 } from './zhenzhai-zhusha.js';
import { 鎮宅太歲 } from './zhenzhai-taisui.js';
import { 召雷飛符 } from './leifa-zhaolei.js';
import { 召雷飛符二 } from './leifa-zhaolei-2.js';
import { 召雷飛符三 } from './leifa-zhaolei-3.js';
import { 聞命霊首 } from './leifa-wenming-ling.js';
import { 聞命霆首 } from './leifa-wenming-ting.js';
import { 清微令符一 } from './leifa-qingwei-1.js';
import { 清微令符二 } from './leifa-qingwei-2.js';
import { 衝命玉符二 } from './leifa-chongming-2.js';
import { 雷神聚形 } from './leifa-juxing.js';
import { 雷神散形 } from './leifa-sanxing.js';
import { 紫微令首 } from './ziwei-lingshou.js';
import { 令書圈圖 } from './ziwei-quantu.js';
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
  'rushan-yi-1': 入山符乙一,
  'rushan-yi-2': 入山符乙二,
  'chenanshi-1': 陳安世符一,
  'chenanshi-2': 陳安世符二,
  'laojun-shenyin': 老君神印,
  'rushan-bing-1': 入山符丙一,
  'rushan-bing-2': 入山符丙二,
  'rushan-bing-3': 入山符丙三,
  'rushan-bing-4': 入山符丙四,
  'rushan-bing-5': 入山符丙五,
  'peidai-1': 佩帶符一,
  'peidai-2': 佩帶符二,
  'peidai-3': 佩帶符三,
  'chiling-chi': 敕字式,
  'chiling-sha': 煞字式,
  'chiling-tian': 天字式,
  'chiling-gang': 剛字式,
  'chiling-da': 大字式,
  'chiling-sheng': 聖字式,
  'chiling-gui': 鬼字式,
  'chiling-tiangang': 天剛聚形,
  'sanguang-ju': 三光聚形,
  'sanguang-san': 三光散形,
  'fuwen-tiantian': 複文天天,
  'fuwen-jianjian': 複文見見,
  'fuwen-siji': 複文四己,
  'fuwen-tianyin': 複文天天因,
  'fuwen-maomu': 複文毛目,
  'fuwen-didizi': 複文地地子,
  'fuwen-liutian': 複文六天,
  'fuwen-tongdan': 複文同單,
  'fuwen-shengzhu': 複文生朱,
  'fuwen-dazi': 複文大子,
  'zhenzhai-koushe': 鎮宅口舌,
  'zhenzhai-huohai': 鎮宅禍害,
  'zhenzhai-daobing': 鎮宅刀兵,
  'zhenzhai-dong': 鎮宅東方,
  'zhenzhai-nan': 鎮宅南方,
  'zhenzhai-xi': 鎮宅西方,
  'zhenzhai-bei': 鎮宅北方,
  'zhenzhai-zhong': 鎮宅中央,
  'zhenzhai-xiongyang': 鎮宅凶殃,
  'zhenzhai-zhenxiong': 鎮宅鎮凶,
  'zhenzhai-niuma': 鎮宅牛馬,
  'zhenzhai-zhaojin': 鎮宅招金,
  'zhenzhai-fenghuo': 鎮宅風火,
  'zhenzhai-daozei': 鎮宅盜賊,
  'zhenzhai-shuilao': 鎮宅水潦,
  'zhenzhai-jiye': 鎮宅雞夜,
  'zhenzhai-buyi': 鎮宅不宜,
  'zhenzhai-shiqi': 鎮宅時氣,
  'zhenzhai-hengsun': 鎮宅橫損,
  'zhenzhai-wangshi': 鎮宅亡失,
  'zhenzhai-egui': 鎮宅惡鬼,
  'zhenzhai-yangcan': 鎮宅養蠶,
  'zhenzhai-shengchu': 鎮宅牲畜,
  'zhenzhai-feishi': 鎮宅飛尸,
  'zhenzhai-emeng': 鎮宅惡夢,
  'zhenzhai-bifu': 鎮宅比符,
  'zhenzhai-yiguan': 鎮宅宜官,
  'zhenzhai-fushi': 鎮宅伏尸,
  'zhenzhai-buqin': 鎮宅不侵,
  'zhenzhai-jiagui': 鎮宅家鬼,
  'zhenzhai-jibing': 鎮宅疾病,
  'zhenzhai-longshen': 鎮宅龍神,
  'zhenzhai-jingqiu': 鎮宅經求,
  'zhenzhai-quanji': 鎮宅犬雞,
  'zhenzhai-jinyin': 鎮宅金銀,
  'zhenzhai-shechong': 鎮宅蛇蟲,
  'zhenzhai-baozhai': 鎮宅保宅,
  'zhenzhai-shenci': 鎮宅神祠,
  'zhenzhai-yingxing': 鎮宅熒星,
  'zhenzhai-fakuang': 鎮宅發狂,
  'zhenzhai-guanxing': 鎮宅官刑,
  'zhenzhai-laoshu': 鎮宅老樹,
  'zhenzhai-guiguai': 鎮宅鬼恠,
  'zhenzhai-jingkong': 鎮宅驚恐,
  'zhenzhai-yinci': 鎮宅淫祠,
  'zhenzhai-sanguangfu': 鎮宅三光,
  'zhenzhai-zhusha': 鎮宅蛀煞,
  'zhenzhai-taisui': 鎮宅太歲,
  'leifa-zhaolei': 召雷飛符,
  'leifa-zhaolei-2': 召雷飛符二,
  'leifa-zhaolei-3': 召雷飛符三,
  'leifa-wenming-ling': 聞命霊首,
  'leifa-wenming-ting': 聞命霆首,
  'leifa-qingwei-1': 清微令符一,
  'leifa-qingwei-2': 清微令符二,
  'leifa-chongming-2': 衝命玉符二,
  'leifa-juxing': 雷神聚形,
  'leifa-sanxing': 雷神散形,
  'ziwei-lingshou': 紫微令首,
  'ziwei-quantu': 令書圈圖,
  'leifa-wenming': 雷霆聞命符,
  'leifa-qingwei': 清微令符,
  'leifa-chongming': 衝命玉符,
};
