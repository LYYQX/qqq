<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-07 10:22:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div>
         <h1>学生名称：{{name}}</h1>
            <h1>地址：{{age}}</h1>
    </div>
</template>

<script>
// 组件交互相关的代码（数据，方法等）
export default {
    //暴露组件配置对象
    name:'Student',   
    //name与文件名保持一致
    //1.创建school组件
            data() {
                return {
                    name: '易烊千玺',
                    age: '21'
                }
            }

}
</script>

