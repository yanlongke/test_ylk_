/*
 * @Author: 闫龙科
 * @Date: 2019-11-07 09:49:57
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-07 10:03:34
 * @Description: 00
 */
const processChild=require("child_process")

processChild.exec("node child",(error,stdout,stderr)=>{
    if(error)
    {
        throw error
    }else{
        console.log("=====stdout"+stdout)
        console.log("=====stderr"+stderr)
    }
})
let process1=processChild.spawn("node",["./child"]);
process1.stdout.on("data",(data)=>{
    console.log("spawn stdout===="+data.toString())
})
process1.stderr.on("data",(data)=>{
    console.log("spawn stderr===="+data.toString())
})

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
processChild.execFile("node",["./child"],(error,stdout,stderr)=>{
    if(error)
    {
        throw error
    }else{
        console.log("execFile---"+stdout)
        console.log("execfile---"+stderr)
    }
})