<!--
 * @Author: your name
 * @Date: 2021-09-07 15:52:17
 * @LastEditTime: 2021-09-10 14:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\App.vue
-->
<template>
  <div>
    <button @click="look">点击查看子组件</button>
       <Child></Child>
  </div>
</template>

<script>
//引入组件
import Child from './components/Child.vue'
export default {
  name:'App',
  components:{
    Child
  },
  methods:{
    look(){
      console.log(this.$children)
    }
  }
} 
</script>

<style>

</style>