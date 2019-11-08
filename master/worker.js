/*
 * @Author: 闫龙科
 * @Date: 2019-11-08 19:55:55
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-08 20:07:22
 * @Description: 00
 */
const http=require("http")

const childServer=http.createServer((req,res)=>{
    if(req.url==="/text")
    {
        res.end("text")
    }else if(req.url==="/error"){
        throw "信息错误"
    }else{
        res.end("ok")
    }
})
process.on("uncaughtException",(error,origin)=>{
    console.log(error,origin)
    process.send({msg:error})
})
process.on("message",(flag,server)=>{
    if(flag==="server")
    {
        server.on("connection",socket=>{
            childServer.emit("connection",socket)
        })
    }
})