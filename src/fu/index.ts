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
import { 鎮宅不宜田 } from './zhenzhai-butian.js';
import { 鎮宅天返 } from './zhenzhai-tianfan.js';
import { 鎮宅百恠 } from './zhenzhai-baiguai.js';
import { 鎮宅官司 } from './zhenzhai-guansi.js';
import { 鎮宅蛇鼠 } from './zhenzhai-dishu.js';
import { 鎮宅辟邪 } from './zhenzhai-bixie.js';
import { 鎮宅田蠶 } from './zhenzhai-tiancan.js';
import { 鎮宅疫氣 } from './zhenzhai-yiqi.js';
import { 鎮宅百鬼 } from './zhenzhai-baiguibu.js';
import { 鎮宅夢寐 } from './zhenzhai-mengmei.js';
import { 鎮宅子孫 } from './zhenzhai-zisun.js';
import { 鎮宅產育 } from './zhenzhai-chanyu.js';
import { 鎮宅連綿 } from './zhenzhai-lianmian.js';
import { 鎮宅奴馬 } from './zhenzhai-numa.js';
import { 鎮宅虛耗 } from './zhenzhai-xuhao.js';
import { 鎮宅驚人 } from './zhenzhai-jingren.js';
import { 鎮宅沈重 } from './zhenzhai-chenzhong.js';
import { 鎮宅腹脹 } from './zhenzhai-fuzhang.js';
import { 鎮宅產耗 } from './zhenzhai-chanhao.js';
import { 鎮宅立塚 } from './zhenzhai-lizhong.js';
import { 鎮宅不禳 } from './zhenzhai-burang.js';
import { 璇璣八卦圖 } from './zhenzhai-xuanji.js';
import { 鎮宅釜鳴 } from './zhenzhai-fuming.js';
import { 鎮宅炁運 } from './zhenzhai-qiyun.js';
import { 鎮宅猪猫 } from './zhenzhai-zhumao.js';
import { 元始保神符 } from './leifa-baoshen.js';
import { 元始符命 } from './leifa-yuanshifuming.js';
import { 呼風玉符 } from './xiandu-hufeng.js';
import { 名雷玉符 } from './xiandu-minglei.js';
import { 起雲玉符 } from './xiandu-qiyun.js';
import { 致雨玉符 } from './xiandu-zhiyu.js';
import { 興電玉符 } from './xiandu-xingdian.js';
import { 禱雪玉符 } from './xiandu-daoxue.js';
import { 借潮玉符 } from './xiandu-jiechao.js';
import { 摧魔玉符 } from './xiandu-cuimo.js';
import { 請晴玉符 } from './xiandu-qingqing.js';
import { 三台神符一 } from './santai-1.js';
import { 三台神符二 } from './santai-2.js';
import { 三台神符三 } from './santai-3.js';
import { 起風符 } from './yutou-qifeng.js';
import { 起雲符 } from './yutou-qiyun.js';
import { 起雷符 } from './yutou-qilei.js';
import { 祈雨符 } from './yutou-qiyu.js';
import { 役電符 } from './yutou-yidian.js';
import { 祈雲符 } from './yutou-qiyun2.js';
import { 祈晴符 } from './yutou-qiqing.js';
import { 散雲符 } from './yutou-sanyun.js';
import { 止風符 } from './yutou-zhifeng.js';
import { 破廟符 } from './yutou-pomiao.js';
import { 太上符二 } from './taishang-2.js';
import { 太上符三 } from './taishang-3.js';
import { 太上符四 } from './taishang-4.js';
import { 太上符五 } from './taishang-5.js';
import { 太上符六 } from './taishang-6.js';
import { 太上符七 } from './taishang-7.js';
import { 西方符一 } from './mulang-xi-1.js';
import { 西方符二 } from './mulang-xi-2.js';
import { 西方符三 } from './mulang-xi-3.js';
import { 西方符四 } from './mulang-xi-4.js';
import { 西方符五 } from './mulang-xi-5.js';
import { 西方符六 } from './mulang-xi-6.js';
import { 西方符七 } from './mulang-xi-7.js';
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
  'zhenzhai-butian': 鎮宅不宜田,
  'zhenzhai-tianfan': 鎮宅天返,
  'zhenzhai-baiguai': 鎮宅百恠,
  'zhenzhai-guansi': 鎮宅官司,
  'zhenzhai-dishu': 鎮宅蛇鼠,
  'zhenzhai-bixie': 鎮宅辟邪,
  'zhenzhai-tiancan': 鎮宅田蠶,
  'zhenzhai-yiqi': 鎮宅疫氣,
  'zhenzhai-baiguibu': 鎮宅百鬼,
  'zhenzhai-mengmei': 鎮宅夢寐,
  'zhenzhai-zisun': 鎮宅子孫,
  'zhenzhai-chanyu': 鎮宅產育,
  'zhenzhai-lianmian': 鎮宅連綿,
  'zhenzhai-numa': 鎮宅奴馬,
  'zhenzhai-xuhao': 鎮宅虛耗,
  'zhenzhai-jingren': 鎮宅驚人,
  'zhenzhai-chenzhong': 鎮宅沈重,
  'zhenzhai-fuzhang': 鎮宅腹脹,
  'zhenzhai-chanhao': 鎮宅產耗,
  'zhenzhai-lizhong': 鎮宅立塚,
  'zhenzhai-burang': 鎮宅不禳,
  'zhenzhai-xuanji': 璇璣八卦圖,
  'zhenzhai-fuming': 鎮宅釜鳴,
  'zhenzhai-qiyun': 鎮宅炁運,
  'zhenzhai-zhumao': 鎮宅猪猫,
  'leifa-baoshen': 元始保神符,
  'leifa-yuanshifuming': 元始符命,
  'xiandu-hufeng': 呼風玉符,
  'xiandu-minglei': 名雷玉符,
  'xiandu-qiyun': 起雲玉符,
  'xiandu-zhiyu': 致雨玉符,
  'xiandu-xingdian': 興電玉符,
  'xiandu-daoxue': 禱雪玉符,
  'xiandu-jiechao': 借潮玉符,
  'xiandu-cuimo': 摧魔玉符,
  'xiandu-qingqing': 請晴玉符,
  'santai-1': 三台神符一,
  'santai-2': 三台神符二,
  'santai-3': 三台神符三,
  'yutou-qifeng': 起風符,
  'yutou-qiyun': 起雲符,
  'yutou-qilei': 起雷符,
  'yutou-qiyu': 祈雨符,
  'yutou-yidian': 役電符,
  'yutou-qiyun2': 祈雲符,
  'yutou-qiqing': 祈晴符,
  'yutou-sanyun': 散雲符,
  'yutou-zhifeng': 止風符,
  'yutou-pomiao': 破廟符,
  'taishang-2': 太上符二,
  'taishang-3': 太上符三,
  'taishang-4': 太上符四,
  'taishang-5': 太上符五,
  'taishang-6': 太上符六,
  'taishang-7': 太上符七,
  'mulang-xi-1': 西方符一,
  'mulang-xi-2': 西方符二,
  'mulang-xi-3': 西方符三,
  'mulang-xi-4': 西方符四,
  'mulang-xi-5': 西方符五,
  'mulang-xi-6': 西方符六,
  'mulang-xi-7': 西方符七,
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
