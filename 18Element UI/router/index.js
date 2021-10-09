/*
 * @Author: your name
 * @Date: 2021-09-14 16:20:29
 * @LastEditTime: 2021-09-16 17:30:02
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
                    path: 'detail',  //使用占位符声明接收params参数
                    component: Detail,

                    // 谁接收东西就写哪
                    //props的第一种写法，值为对象 该对象中的所有key-value都以props的形式传给Detail组件
                    //  props:{
                    //      a:1,
                    //      b:'默多克零'
                    //  }
                    
                    ///props的第二种写法，若布尔值为true，就会把路由组件收到的所有params参数，以props的形式传给Detail组件
                    //  props:true

                    //第三种写法，值为函数
                     props($route){
                        return{id:$route.query.id,title:$route.query.title}//完整版
                     }
                    //简写
                    // props({query}){
                    //     return{id:query.id,title:query.title}//
                    //  }
                    //  props({query:{id,title}}){
                    //     return{id,title}//
                    //  }
                   }
                ]
               }
        ]
        }, //配置对象
    ]
});
export default router