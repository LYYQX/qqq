<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-09 16:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
   <h1>我是爸爸</h1>
   <h2>{{msg}}</h2>
   <Child :msg="msg" @chang="msg=$event"></Child>
   <Child1 :msg="msg"></Child1>
  </div>
</template>

<script>
import Child from '../components/Child.vue'
import Child1 from '../components/Child1.vue'
export default {
    name:'Parent',
   components:{
     Child,
     Child1},
    data(){
        return{
          msg:"哈萨克"
        }
    },
    

}
</script>

<style>
  .root{
      background-color: pink;
  }
</style>
