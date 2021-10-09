/*
 * @Author: your name
 * @Date: 2021-09-07 15:52:07
 * @LastEditTime: 2021-09-15 15:35:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\main.js
 */

//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router' 
//引入路由器
import router from './router'
//关闭生产提示
Vue.config.productionTip=false
//应用插件
Vue.use(VueRouter)

//创建vue实例
new Vue({
    el:'#app',
    render:h=>h(App),
    components:{router},
    router:router      //第一个是router路由器 
})