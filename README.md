# 老鼠吃芝士學西語

一個零安裝、可直接雙擊 index.html 開啟的靜態網頁 App，提供：
- 卡片模式（英⇄西翻面、發音）
- 猜詞遊戲（老鼠吃芝士）
- 本地進度儲存與統計

使用方式：
1. 在檔案總管開啟此資料夾，雙擊 index.html 以瀏覽器開啟即可。
2. 選擇「卡片」或「猜詞遊戲」分頁開始練習。
3. 進度會自動保存於瀏覽器 LocalStorage。

自訂單字：
在 app.js 內的 VOCABULARY 陣列新增項目（範例：{ es: "queso", en: "cheese", category: "food", hint: "老鼠最愛" }）。
可用類別（可擴充）：greetings、food、colors。也可在 CATEGORIES 陣列新增自訂類別。

發音：
使用瀏覽器 SpeechSynthesis（若可用）以 es-ES 語音播放西語。若裝置未支援，發音按鈕不會出錯，但也不會播放。

檔案結構：
- index.html：主頁面
- styles.css：樣式
- app.js：邏輯與資料
- README.md：說明

