<!--
 * @Author: your name
 * @Date: 2021-09-07 15:52:17
 * @LastEditTime: 2021-09-10 16:49:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\App.vue
-->
<template>
  <div>
      <Border @add="add"></Border>
      <Child :list="list"></Child>
       
  </div>
</template>
...................................
<script>
//引入组件
import Border from './components/Border.vue'
import Child from './components/Child.vue'
export default {
  name:'App',
  data(){
      return{
          list:[
              {id:1,
               name:'易烊千玺'
              },
              {
                  id:2,
                  name:'王俊凯'
              }
          ]
      }
  },
  components:{
      Border,
      Child
  },
  methods:{
      add(name){
          this.list.push({
              id:Math.random(),
              name
          })
      }
  }
} 
</script>

<style>

</style>