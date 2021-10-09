<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-16 10:02:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div>
        <ul>
            <li>编号：{{$route.query.id}}</li>
            <li>标题：{{$route.query.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Message',   
    mounted(){
        console.log(this.$route)
    }
}
</script>
