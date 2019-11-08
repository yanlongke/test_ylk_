#! /usr/bin/env node
console.log(process.cwd())
let pack=require("./package.json")
const file="demo"
if(process.argv[2]==="-v")
{
    console.log(pack.version)
}else if(process.argv[2]==="create"){
    files=process.argv[3]?process.argv[3]:file
    console.log("初始化项目"+files)
}