/*
 * @Author: your name
 * @Date: 2021-09-07 15:52:07
 * @LastEditTime: 2021-09-07 15:55:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\main.js
 */

//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭生产提示
Vue.config.productionTip=false
//创建vue实例
new Vue({
    el:'#app',
    render:h=>h(App)
})