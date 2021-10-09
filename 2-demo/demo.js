/*
 * @Author: your name
 * @Date: 2021-10-09 11:46:32
 * @LastEditTime: 2021-10-09 15:24:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8.20\10.9Promise基本使用\2-封装mineReadFile.js
 */
// 封装一个函数  mineReadFile 读取文件内容
// 参数：path 文件路径
// 返回：promise 对象 

function mineReadFile(path){
    return new Promise((res,rej)=>{
        //读取文件
        require('fs').readFile(path,(err,data)=>{
            //判断
            if(err){
                rej(err);
            }else{
                res(data);
            }
        })
    })
}
mineReadFile('../hello/content.txt')
.then(value=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
});
