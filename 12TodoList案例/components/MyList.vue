<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-14 10:56:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div>
         <MyItem v-for="todo in todos" :key="todo.id"></MyItem>
    </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',   
  components:{MyItem},
  props:['todos']
}
</script>

<style>
 
</style>
