#! /usr/bin/env node
console.log(process.argv[2])
let port=8080

let {version}=require("../package.json")
if(process.argv[2]==="-v")
{
    console.log(version)
}else if(process.argv[2]==="-p" && process.argv[3])
{
    port=process.argv[3]?process.argv[3]:port
    app.listen(port,()=>{
        console.log(port+"启动成功")
    })
}