$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()/*←取消原本預設的功能*/
  })
/* Step 9:
 * 修改上一個程式碼片段的 `$.get()` ，加上下面的程式碼的內容
 * 修改 `element selector` 成適合的值
 * `$.get()` 的第二個參數，用來將資料送給伺服器
 * 特別注意 html 中的 `fname` 和伺服器端的 `fname` 兩者之間的連結
 * `./dist/exercise.html` 中的 `fname` vs. `./ser.js` 中的 `fname`
 * 自己打包資料確實很麻煩，但是也帶來更大的彈性
 * 在瀏覽器中打開 `[host]:[port]/exercise.html`，開啟瀏覽器的開發者工具並切到 network 的分頁
 * 點擊 ajax 的提交按鈕，並且觀察 request
*/
$.get('./step5', {
  fname: $('#ajax-form input[name=fname]').val(),
  lname: $('#ajax-form input[name=lname]').val(),
}, (data) => {
  $('ajax-output').html(data)
})
/* Step 10:
 * 用以下程式碼片段取代 Step 9 中的 `$.get()`
 * `$.get()` 的第三個參數是一個回呼(callback)函式，當伺服器回傳時就會被呼叫
 * 這個回呼函式的第一個參數，就是伺器器回傳的結果
 * 將 [show data in div#ajax-output] 修改成合適的值
 * 用瀏覽器打開 `[host]:[port]/exercise.html`，點擊 ajax 提交按鈕並查看結果
 */
    
  // Step 11 code goes here
  setTimeout(() => {
    $('#ajax-output').html('loaded')
  }, 100)
  $('#ajax-output').html('loading')    
})