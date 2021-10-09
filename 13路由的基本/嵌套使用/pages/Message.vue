<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-15 17:20:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <a href="/message">{{m.title}}</a>
            </li>
        </ul>
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
