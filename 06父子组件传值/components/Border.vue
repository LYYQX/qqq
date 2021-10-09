<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-09 15:14:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
    <input type="text" v-model="name">
    <button @click="add">添加</button>
  </div>
</template>

<script>

export default {
    name:'Parent',
   
    data(){
        return{
          name:''
        }
    },
    methods:{
      add(){
         this.$emit('add',this.name)
      }
    }

}
</script>

<style>
  .root{
      background-color: pink;
  }
</style>
