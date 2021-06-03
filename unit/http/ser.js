#!/usr/bin/env node

/* Step 1:
 * 將 [port] 修改成合適的值
 * 將設定放在變數中是一種好習慣，參考程式中的 `port`
 * 學習 js 的 string interpolation 語法，參考程式中的 `${port}`
 */

// 載入 `express`
const express = require('express')

// 建立一個 express (也就是網頁伺服器)實體，創造web*wercer的工廠
const app = express()

const port = 45137

// 處理 `/step1` 網址
app.get('/step1', (req, res) => {
  // 回應瀏覽器
  res.send('<h1>hello world</h1>')
})

// 啟動伺服器
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

/* Step 3:
 * 將 [path] 修改成合適的值
 * 注意靜態檔案放在 `./dist` 目錄下
 * `express.static()` 專門用來處理靜態檔案，搜尋 `express static` 了解更多
 * `__dirname` 是 node.js 的環境變數，搜尋 `nodejs __dirname` 了解更多
 */

// 處理其它網址
app.use(express.static(`${__dirname}/dist`))
//${__dirname再目前目錄下的}/path這個位置

/* Step 4:
 * 用瀏覽器打開 `[host]:[port]/step4` 多次看結果
 * 試著重新執行程式並觀察結果
 * 學習 js 的 string interpolation 語法，參考程式中的 `${++nRequests}`
 */
let nRequests = 0
app.get('/step4', (req, res) => {
  res.send(`this is request #${++nRequests}`)
})

/* Step 5:使用者的input共享到server上
 * 使用者輸入存放在回呼(callback)函式的第一個參數，也就是程式中的 `req` 裡
 * 用瀏覽器打開 `[host]:[port]/step5?fname=[fname]&lname=[lname]` 看結果
 * 試著修改 [fname] 與 [lanme]
 * 注意網址中 `?` 與 `&` 的用法
 */
app.get('/step5', (req, res) => {
    res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
  })

/* Step 7:
 * 將 [property name] 修改成合適的值
 * 搜尋 `express body-parser` 了解更多
 * 注意這裡用的是 `app.post()` 而非 `app.get()`
 * 伺服器可以依 get 或是 post，針對同樣網址回傳不同結果
 */

// 載入 `body-parser`
const bodyParser = require('body-parser')

// 設定 `body-parser`
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/step7', (req, res) => {
  // `bady-parser` 將解析好的資料存放在 `req.body`
  res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})
