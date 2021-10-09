<!--
 * @Author: your name
 * @Date: 2021-09-07 15:52:17
 * @LastEditTime: 2021-09-13 14:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\App.vue
-->
<template>
  <div>
   <h1>八年级客户</h1>
       <School></School>
       <Student></Student>
  </div>
</template>

<script>

//引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name:'App',
  components:{
    School,
    Student
    
  },
  
} 
</script>

<style>

</style>