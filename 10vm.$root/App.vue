<!--
 * @Author: your name
 * @Date: 2021-09-07 15:52:17
 * @LastEditTime: 2021-09-10 14:56:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\App.vue
-->
<template>
  <div>
    
       <Child></Child>
  </div>
</template>

<script>
//引入组件
import Child from './components/Child.vue'
export default {
  name:'App',
  components:{
    Child
  },
  
} 
</script>

<style>

</style>