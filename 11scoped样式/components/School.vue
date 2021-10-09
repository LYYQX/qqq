<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-13 14:22:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div class="demo">
         <h1>学校名称：{{school}}</h1>
            <h1>地址：{{address}}</h1>
    </div>
</template>

<script>
// 组件交互相关的代码（数据，方法等）
export default {
    //暴露组件配置对象
    name:'School',   
    //name与文件名保持一致
    //1.创建school组件
            data() {
                return {
                    school: '长沙南方',
                    address: '长沙'
                }
            }
    
}
</script>

<style scoped>
    /* 组件的样式 */
    .demo{
        background-color: pink;
    }
</style>
