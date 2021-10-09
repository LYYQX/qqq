/*
 * @Author: your name
 * @Date: 2021-09-10 15:09:21
 * @LastEditTime: 2021-09-10 16:49:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \text\04_src_mixin混入\mixin.js
 */
export const mixin={
    created () {this.hello()},
    methods: {
      hello () {
        console.log('hello from mixin!')
      }
    }
  
}