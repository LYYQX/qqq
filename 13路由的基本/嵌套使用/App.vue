<!--
 * @Author: your name
 * @Date: 2021-09-07 15:52:17
 * @LastEditTime: 2021-09-16 17:25:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\App.vue
-->
<template>
  <div class="con">
    <div class="top">
      <h1>vue-router路由</h1>
    </div>
    <hr />
    <div class="foot">
      <div class="left">
        <!-- Vue借助router-link标签实现路由器得切换 -->
        <div class="left-list-1">
          <router-link class="left-list-1" active-class="active" to="/About">About</router-link>
        </div>
        <div class="left-list-1">
          <router-link class="left-list-1" active-class="active" to="/Home">Home</router-link>
        </div>
      </div>
      <div class="show">
         指定组件呈现得位置
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.top {
  height: 100px;
  width: 300px;
  line-height: 100px;
  background-color: burlywood;
  text-align: center;
}
.foot {
  height: 400px;
  width: 300px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-around;
}
.left {
  height: 300px;
  width: 100px;
  background-color: cadetblue;
}
.left-list-1 {
  height: 50px;
  width: 100%;
}
.show {
  height: 300px;
  width: 200px;
  background-color: rgb(137, 189, 190);
}
</style>