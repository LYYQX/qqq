<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-10 14:48:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
    <template>
      <div>
        <h1>{{msg}}</h1>
      </div>
    </template>

  </div>
</template>

<script>
export default {
    name:'Child',
    data(){
      return{
        msg:'经典款'
      }
    }
}
</script>

<style>
  .root{
      background-color: pink;
  }
</style>
