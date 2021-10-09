<!--
 * @Author: your name
 * @Date: 2021-09-07 15:52:17
 * @LastEditTime: 2021-09-10 09:55:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\App.vue
-->
<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="ShowDOM">点我输出</button>
      <School></School>
      <School/>
  </div>
</template>

<script>
//引入组件
import School from './components/School.vue'
export default {
  name:'App',
  data(){
        return{
            msg:'后方可进场'
        }
  },
  components:{
      School
  },
  methods:{
      ShowDOM(){
          console.log(this.$refs.title)
      }
  }
}
</script>

<style>

</style>