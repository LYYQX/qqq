<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-10 16:49:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
     <h1>我是儿子</h1>
     <h2>{{msg}}</h2>
     <button @click="chang">改变</button>
  </div>
</template>

<script>

export default {
    name:'Child',
    props:['msg'],
    methods:{
     chang(){
       this.$emit('chang','99')
     }
    }
}
</script>

<style>
  .root{
      background-color: pink;
  }
</style>
