# 符籙庫工作之律

此倉為如法符籙標準庫（TypeScript，文言 API，漢字標識符有意為之）——道家符籙之
程序繪製：符式・出典・白描。承粉本庫（../fenben）之法統：格網為律・出典為戒・
筆觸為器。繪製 session 開工前，先讀畢此卷與 docs/符籙標準.md（立卷後）。

## 鐵律

- **符身不假手**：落筆（`src/fu/` 逐符之筆、`src/fubi.ts` 符書通形）必親筆，
  不遣 subagent、不遣 Codex。考據調研可遣 agent 分頭去查，落筆不可。
- **寧缺毋誤**：符式字段出典查不實則置 null 並注待核，不編造。符籙尤甚——
  道法傳承多祕，網上「靈符」十九為今人杜撰；**唯道藏本・善本圖版可據**
  （正統道藏・道法會元・靈寶玉鑑・抱朴子登涉篇入山符・五嶽真形圖諸摹本・
  太平經複文）。傳世有異本者並陳勿強合；祕而不傳者記其位注「祕傳不錄」，
  絕不臆補。「已核」之判：式・出典・結構・用途四字段皆有出典（≥2 源交叉）。
- **零圖片資源**：諸源只作本地參攷與出典引用；參攷圖入 `參攷-local/`
  （gitignore，永不入庫）。自庫機出之圖（圖錄/）視同 dist 產物不在此禁。
- **類型即律，載入即誦戒**：符類・符段・信級皆閉集聯合，新類先擴類型再填數據；
  符格數值（`fuge.ts`）繫出典，誦戒斷言破則是數據錯。
- **敬而不用**：此庫為圖像學與書法研究之藏，符籙之「用」（開光・敕召・行持）
  屬道門儀軌，非本庫之事——README 與陳列頁明注「研究陳列，非行持之符」。

## 符格（紙・段之制——本庫之 T1419）

符籙無 T1419 之經，然傳統符式自有其段（考據先行，暫定候典）：
- 紙式：豎條，寬一高三為基（黃紙硃書之制；異式並陳）；
- 縱段四分（自上而下）：**符頭**（三清諱「三勾」或「敕令」二字位）→
  **符身**（雲篆・複文・諱字疊書）→**符膽**（密核之位，罡字/密諱）→
  **符腳**（叉腳押煞/罡步紋）；各段比例逐式考據後入 `fuge.ts` 為錨；
- 筆觸：承粉本三等筆（骨衣細）＋一筆（tapered 提按——符書之抖筆頓筆正需之）；
  硃墨二色位（白描庫以線密度代色，`硃` 標識層留於 API）。

## 逐符之法（工序）

1. **考據**：查 docs/考據/ 有無存卷（勿重查）；新符先立 `src/fupu.ts` 條目，
   字段皆繫出典（≥2 源），信＝待核；查不實置 null。
2. **落筆**：`src/fu/<符號>.ts` export 一筆 `(bi: 筆具, tiao: 符條) => void`；
   於 `src/fu/index.ts` 落筆簿登記。符頭符腳可呼通形，符身必逐筆自運。
3. **驗**：`npm run build`；headless 截圖親見（tools/lib/幀具.cjs）自校兩輪以上；
   **雲篆結構遣 Codex 數值審**（筆畫交接・封口・對稱之驗——目審氣韻，碼審連續）。
4. **候審→升核**：commit 後陳列頁朱界候審；主人印可且出典俱足乃升「已核」。

## commit 紀律

commit 前必以 staged diff 付 Codex 審（HIGH 必修而後 commit）：
```
git diff --cached | codex exec --sandbox read-only \
  --output-last-message /tmp/codex-review-result.txt \
  "Review this staged diff for bugs, security, edge cases. Classical-Chinese identifiers are intentional. file:line format. Say LGTM if clean."
```

## 驗收工具

- headless：playwright-core＋chrome-headless-shell（~/Library/Caches/ms-playwright）；
  截圖勿於畫布內鋪底（destination-out 鑿穿），透明布後合成深底。
- 本地預覽：倉根 `python3 -m http.server`，開 index.html（先 build）。
- `dist/` 機出隨 commit 同步，勿手改。

## 遠圖

獨立 js/ts 庫公用（package.json exports 已按此制）；陳列頁（index.html）＋
符譜頁；與 fenben 共享筆觸演進（bi.ts 自 fenben 移植，改進雙向回流注明）。
