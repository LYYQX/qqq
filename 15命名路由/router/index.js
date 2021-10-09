/*
 * @Author: your name
 * @Date: 2021-09-14 16:20:29
 * @LastEditTime: 2021-09-16 11:02:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\router\index.js
 */


//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router' //可以当构造函数使用
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'


//创建并暴露一个路由器
const router= new VueRouter({
    routes: [ //数组
        {
          name:'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [       //通过children配置子级路由
                {
                path: 'news',  //一定不要写 /news 已经自动配置/
                component: News
               },
               {
                path: 'message',  //一定不要写 /message 已经自动配置/
                component: Message,
                children:[
                   {
                    name:'xiangqing',
                    path: 'detail',  //一定不要写 /message 已经自动配置/
                    component: Detail,
                   }
                ]
               }
        ]
        }, //配置对象
    ]
});
export default router