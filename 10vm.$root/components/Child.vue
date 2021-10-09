<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-10 14:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
    <template>
      <div>
        <button @click="look">查看</button>
      </div>
    </template>

  </div>
</template>

<script>
export default {
    name:'Child',
    methods:{
      look(){
         console.log(this.$root)

      }
    }
}
</script>

<style>
  .root{
      background-color: pink;
  }
</style>
