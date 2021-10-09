<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-10 11:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
    <h1>父组件</h1>
    <h3>手机信息搜索</h3>
    手机品牌：<input type="text" v-model="brand" />
    <!-- 子组件 -->
    <Child :brand="brand"></Child>
  </div>
</template>

<script>
import Child from "../components/Child.vue";
export default {
  name: "Parent",
  components: { Child },
  data() {
    return {
      brand: [
        { id: 1, nmae: "华为", type: "Mate20", price: 3699 },
        {
          nmae: "苹果",
          type: "'iPhone7'",
          price: 2949,
        },
      ],
    };
  },
};
</script>

<style>
.root {
  background-color: pink;
}
</style>
