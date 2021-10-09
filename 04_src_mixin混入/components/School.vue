<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-10 15:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="demo">
      <h1>学校名称:{{name}}</h1>
      <h1>地址：{{address}}</h1>
  </div>
</template>

<script>
import { mixin } from 'vue/types/umd'
export default {
    name:'School',
    data(){
        return{
            name:'柯尼卡是的',
            address:'城内'
        }
    },
    mixins:[mixin]
}
</script>

<style>
  .demo{
      background-color: pink;
  }
</style>
