import Vue from 'vue'
// Step 1 code here
/* Step 1
 * 在 `app.js` 中們新增一個 vue 實例並跟 `#app` 綁定
 * 根據 vue 作者的說法程式碼中的 h 代表 hyperscript
 * 我們會在同一個檔案，App.vue，中撰寫 pug/sass/js，並在此引入這個檔案
 */
import 'semantic-ui-offline/semantic.min.css'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})