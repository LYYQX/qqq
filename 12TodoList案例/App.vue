<!--
 * @Author: your name
 * @Date: 2021-09-07 15:52:17
 * @LastEditTime: 2021-09-14 11:16:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\App.vue
-->
<template>
 <div>
   <MyHeader :addTodo="addTodo"></MyHeader>
   <MyList :todos="todos"></MyList>
    <MyFooter></MyFooter>
 </div>
</template>

<script>

//引入组件
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyList from './components/MyList.vue'
export default {
  name:'App',
  components:{
    MyHeader,
    MyFooter,
    MyList,
    
  },
  data(){
    return{
      todos:[
        {id:'001',title:'吃饭',done:true},
        {id:'001',title:'睡觉',done:false},
        {id:'001',title:'玩游戏',done:true},
      ]
    }
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    }
  }
  
} 
</script>

<style>

</style>