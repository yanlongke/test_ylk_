#! /usr/bin/env node

let oldname=process.argv[2].slice(1)
let newname=process.argv[3].slice(1)

let path=require("path")
let fs=require("fs")
let url=path.join(process.cwd(),oldname)

if(fs.existsSync(url))
{
    fs.renameSync(url,newname)
}else{
    console.log("该文件不存在")
}