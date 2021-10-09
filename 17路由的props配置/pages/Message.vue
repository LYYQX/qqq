<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-16 17:25:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                 <!-- <router-link :to="`/home/message/detail/222/内部接口`">{{m.title}}</router-link> -->

                  <router-link :to="{
                       name:'xiangqing',//必须用name
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
