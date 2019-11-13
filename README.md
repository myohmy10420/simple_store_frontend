專案使用[Create React App](https://github.com/facebook/create-react-app)建立

## 參考環境

node v10.16.0

yarn 1.10.1

## 使用說明

clone專案下來之後

`$ yarn install`

`$ yarn start`

即可開啟首頁, 需要搭配[simple_store_backend](https://github.com/myohmy10420/simple_store_backend)，並且後端需要安裝 puma 使用 simple_store_api.test 網址開啟 server

## 自動部署

自動部署指令

`$ ./deploy.sh production`

#### 模擬部署

`$ ./deploy.sh development`

專案裡有`deploy_test`代表模擬機台，每次模擬部署都會 link build_version裡最新的版本，可以進入到deploy_test底下執行

`$ node server.js`

開啟該模擬機台的 server

## 內容說明

新增商品 > 點選商品 > 加入購物車 > 選擇數量 > 填寫資料 > 確認訂單 > 訂單成立(此時跳出寄信模擬視窗)

可以在首頁或者訂單成立頁面點選聯繫我們留下訊息

目前驗證都在後端做並傳到前端顯示 alert
