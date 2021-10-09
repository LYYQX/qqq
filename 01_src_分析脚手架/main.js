/*
 * @Author: your name
 * @Date: 2021-09-07 10:52:45
 * @LastEditTime: 2021-09-07 14:50:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\main.js
 */
// 该文件是整个项目的入口

//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建vue实例
new Vue({
 el:'#app',
  //一会解释，完成了这个功能，将App组件放入容器中
  render: h => h(App),
})
// .$mount('#app')
