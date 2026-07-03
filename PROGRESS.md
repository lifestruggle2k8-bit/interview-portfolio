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
