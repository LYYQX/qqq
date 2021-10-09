<!--
 * @Author: your name
 * @Date: 2021-09-07 10:03:18
 * @LastEditTime: 2021-09-16 17:26:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\9.7单文件组件\School.vue
-->
<template>
<!-- 组件的结构 -->
    <div>
        <ul>
            <li>编号：{{id}}</li>
            <li>标题：{{title}}</li>
            <!-- 第一种
            <li>a:{{a}}</li>
            <li>b:{{b}}</li> --> 
        </ul>
    </div>
</template>

<script>
export default {
    name:'Detail', 
      props:['id','title'],
    // 第一种 
     //props:['a','b'] 

    // mounted(){
    //     // console.log(this.$route)
    // }
}
</script>
