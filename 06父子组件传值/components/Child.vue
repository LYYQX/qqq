<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-09 15:07:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    name:'Child',
    props:{
      list:Array
    }
     
}
</script>

<style>
  .root{
      background-color: pink;
  }
</style>
