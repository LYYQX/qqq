<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-15 17:32:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
  <!-- 组件的结构 -->
  <div>
    <h2>我是home组件</h2>
    <div class="dis">
      <router-link active-class="active" to="/Home/News">news</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
      <router-link active-class="active" to="/Home/Message">Message</router-link
      >
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
.dis{
  display: flex;
}
</style>
