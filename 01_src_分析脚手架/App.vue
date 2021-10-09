<!--
 * @Author: your name
 * @Date: 2021-09-07 10:24:22
 * @LastEditTime: 2021-09-07 15:45:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\App.vue
-->
<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
  // 汇总所有组件
//引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
   name:'App',
   //注册
  components:{
       School,
   Student
  }
}
</script>
