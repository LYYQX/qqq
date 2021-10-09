<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-16 11:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                 <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> --> -->
           
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                 <router-link :to="{
                     path:'/home/message/detail',
                     query:{
                         id:m.id,
                         title:m.title
                     }
                 }">
                 {{m.title}}
                 
                     
                 </router-link> 
            </li>
        </ul>
        <hr>
         <router-view></router-view>
    </div>
   
</template>

<script>
export default {
    name:'Message',   
    data(){
        return{
          messageList:[
               {id:'001',title:'不结婚'},
               {id:'002',title:'解耦IP'},
               {id:'003',title:'你困了就'},
               {id:'004',title:'很健康'},

          ]
        }
    }
}
</script>
