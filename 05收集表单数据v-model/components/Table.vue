<!--
 * @Author: your name
 * @Date: 2021-09-07 15:56:05
 * @LastEditTime: 2021-09-09 10:32:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\src\components\School.vue
-->
<template>
  <div class="root">
    <form @submit.prevent="demo">
         <!-- <label for="demo">帐号：</label>
     <input type="text" id="demo"> -->
        帐号：<input type="text" v-model.trim="userInfo.account"><br><br>  
        密码：<input type="text" v-model.trim="userInfo.password"><br><br>
        年龄：<input type="number" v-model.number="userInfo.age"><br><br>
        性别：
        女<input type="radio" name="sex" v-model="userInfo.sex" value="woman">
        男<input type="radio" name="sex" v-model="userInfo.sex" value="man"><br><br>
        爱好：
        吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
         睡觉<input type="checkbox" v-model="userInfo.hobby" value="sleep">
          打游戏<input type="checkbox" v-model="userInfo.hobby" value="playGame"><br><br>
          所属校区：
          <select v-model="userInfo.city">
              <option value="">请选择</option>
              <option value="bj">北京</option>
               <option value="sh">上海</option>
                <option value="nj">南京</option>
                 <option value="cd">成都</option>
          </select><br><br>
          其他信息：
          <textarea v-model.lazy="userInfo.other"></textarea><br><br>
          <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a><br><br>
          <button>提交</button>
    </form>
  </div>
</template>

<script>
export default {
    name:'Table',
    data(){
        return{
         userInfo:{
              account:'',
          password:'',
          age:'',
          sex:'woman',
          hobby:[],
          city:'bj',
          other:'',
          agree:''
         }
        }
    },
    methods:{
        demo(){
             console.log(JSON.stringify(this.userInfo))
        }
    }
}
</script>

<style>
  .root{
      background-color: pink;
  }
</style>
