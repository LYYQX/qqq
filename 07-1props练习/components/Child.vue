<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-10 11:59:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
    <ul>
      <li v-for="item in brand"  :key="item.id">
        {{item.name}}-{{item.type}}-{{item.price}}
      </li>
                                                                
    </ul>
  </div>
</template>

<script>
export default {
  name: "Child",
  props:{
    brand:Array
  }
};
</script>

<style>
.root {
  background-color: pink;
}
</style>
