/*
 * @Author: your name
 * @Date: 2021-09-07 15:52:07
 * @LastEditTime: 2021-09-17 10:10:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\main.js
 */

//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭生产提示
// //引入ElementUI组件库
// import ElementUI from 'element-ui';
// ////引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';


//按需引入
import { Button ,Row} from 'element-ui';

Vue.config.productionTip=false
// //应用
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);

//创建vue实例
new Vue({
    el:'#app',
    render:h=>h(App),
   
   
})