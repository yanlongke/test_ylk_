/*
 * @Author: 闫龙科
 * @Date: 2019-11-08 10:54:28
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-08 11:42:55
 * @Description: 00
 */
let download=require("download-git-repo")
let child_process=require("child_process")
download("github:xiaodanli/vue-demo","test",(error)=>{
    if(error)
    {
        throw error
    }else{
        process.chdir("./test/vue-demo")
        child_process.exec("npm install")
        console.log("成功")
    }
})