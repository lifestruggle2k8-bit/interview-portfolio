# 個人網站進度紀錄

更新日期：2026-07-03

## 目前狀態

- 個人網站已建立為靜態站，使用純 `HTML / CSS / JS`
- 原始碼已推送至 GitHub repo：
  - `lifestruggle2k8-bit/interview-portfolio`
- 正式預覽目前改走 Vercel：
  - https://interview-portfolio-nine.vercel.app/
- GitHub Pages 曾設定過，但未作為目前正式發佈路徑

## 已完成項目

### 1. 網站基礎架構

- 建立首頁、成果區、案例區、經歷區、關於我、聯絡區
- 採用 Traditional Chinese 為主的內容呈現
- 以面試用途為主，優先凸顯量化成果與可聯絡方式

### 2. 視覺方向

- 主風格採 Apple 極簡方向
- 後續再加強為 `Apple 極簡 + Bento Grid`
- Hero 區已補強快速重點卡片與右側資訊拼塊

### 3. 入口轉場動畫

- 已加入入口動畫 overlay
- 已加入 `ENTER` 按鈕
- 已支援桌機 / 手機不同影片來源：
  - `intro-transition-desktop.mp4`：16:9
  - `intro-transition-mobile.mp4`：9:16
  - `intro-transition.mp4`：fallback

### 4. 行動裝置支援

- 已有手機 responsive breakpoint
- 手機端會優先載入直式轉場影片
- 聯絡區已可在手機上直接：
  - 寄信
  - 點擊電話撥號
  - 開啟 LinkedIn
  - 開啟 104

### 5. 聯絡資訊

- Email：`lifestruggle2k8@gmail.com`
- Phone：`0958-955-677`
- LinkedIn：
  - https://www.linkedin.com/in/chung-cheng-wang-10004616b/
- 104：
  - https://pda.104.com.tw/profile/share/bIUm9Rs3smd56i8H62xdmdBg8eGKY2WI

### 6. 已處理問題

- 原本首頁失效的 PDF CTA 已移除，不再把壞連結放在第一屏
- 聯絡區原本 PDF 下載區已改為可用的外部聯絡入口
- 影片已改為裝置分流，減少手機裁切問題

### 7. 最新履歷同步

- 依 `王中成 (4).pdf` 重新整理首頁 Hero 文案
- 量化成果改為更貼近最新履歷的版本：
  - `US$350K` 國際訂單
  - `200+` 展會潛在名單
  - `80+` 新增經銷合作
  - `100萬+` 單月業績
- 經歷區補入 2025 短期國際業務經驗
- About 區補入最新證照、永續管理訓練與 AI 工具實作

### 8. 小工具網站曝光

- 在首頁第一屏右側摘要區新增顯眼卡片
- 連結至：
  - https://usefultoolscollection-1.vercel.app/
- 讓面試官進站後第一屏就能看到你的實作網站之一

### 9. 首頁文案與版面微調

- Header 品牌列改為 `ALL ABOUT ME`
- Hero 主標改為：
  - `先拆解需求，再動手做。`
- 一句話介紹改為兩行版本：
  - `不只是把事情做完，而是做到令人放心。`
- 將「核心資訊」與「現在找得到我」合併為「專業認證」
- 「我怎麼做事」區塊改為 `SMART 原則` 五張卡片

### 10. 首頁視覺與標題再調整

- Header 品牌列改為 `ALL ABOUT CHUNG CHENG WANG`
- 放大頂部導覽列尺寸，讓視覺高度更接近下方首屏卡片
- 成果區主標改為 `讓數字說話。`
- 案例區主標改為 `團隊協作、釐清盲點、複製成功模式。`
- SMART 區主標改為 `我的做事方法：SMART。`
- 經歷區右側說明改為 `看更多我的經歷，請見履歷。`

### 11. About 區重排

- 將 About 左側大欄位抽出，移到成果區前方
- 右側卡片調整為兩張：
  - `工具提升效率`
  - `近期 AI 工具實作`
- 將 `317 小時永續管理實務人才培訓` 移到首屏重點卡
- 將原本訓練項目位置改為 `Agentic AI`

### 12. 聯絡與職位文案微調

- 聯絡區大字改為 `如果你覺得我還不錯 歡迎找我聊聊`
- `比較適合我的工作` 改為 `我正在找的職位`
- 職位標籤改為：
  - `Business Development`
  - `Project Manager`
  - `Sales`
- 一句話介紹卡改為：
  - `把事情做完 X`
  - `做到令人放心 √`

## Git / 部署紀錄摘要

- `c913c53` Public website without PDFs
- `32eef8e` Trigger GitHub Pages rebuild
- `46ef35e` Add device-specific intro videos
- `011ec3f` Update contact links and email
- `1ddd2d2` Add phone contact link
- `4975583` Refine hero and results with bento layout

## 目前待辦

- 再檢查一次手機實機上的 Hero 首屏密度是否過滿
- 決定是否再往下列其中一個方向優化：
  - 更像 Apple 官網
  - 更像高級個人名片
- 如果未來要重新開放履歷 / PMP PDF：
  - 要先決定公開方式
  - 避免再次出現 404 或隱私外洩

## 後續作業規則

- 使用者已要求：改完可直接 push，不用逐次等待確認
- 但若涉及：
  - 個資外洩風險
  - PDF 公開
  - 第三方帳號／付費設定
  - 破壞性變更
  仍需先明確提醒
