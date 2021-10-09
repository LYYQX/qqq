<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-09 16:32:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
     <h1>我是哥哥</h1>
     <h2>{{msg}}</h2>
  </div>
</template>

<script>

export default {
    name:'Child',
    props:['msg']
}
</script>

<style>
  .root{
      background-color: pink;
  }
</style>
