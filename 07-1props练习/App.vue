<!--
 * @Author: your name
 * @Date: 2021-09-07 15:52:17
 * @LastEditTime: 2021-09-10 12:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\App.vue
-->
<template>
  <div>
      <Parent ></Parent>
      <Child :list="list"></Child>
       
  </div>
</template>
<script>
//引入组件
import Parent from './components/Parent.vue'
import Child from './components/Child.vue'
export default {
  name:'App',
components:{
    Parent,
    Child
}
} 
</script>

<style>

</style>