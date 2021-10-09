<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-14 11:44:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div class="">
         <input type="text" placeholder="请输入" v-model="title" @keyup.enter="add">
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',  
    data(){
        return{
            title:''
        }
    } ,
  methods:{
      add(){
          //校验数据
          if(!this.title.trim){
                 return alert('不能为空')
          }
          //将用户的输入包装成一个todo对象
          const todoObj={id:nanoid(),title:this.title,done:false}
          //通知App组件去添加一个todo对象
         this.addTodo(todoObj)
         //清空输入
         this.title=""
      }
  }
}
</script>

<style>
 
</style>
