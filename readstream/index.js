/*
 * @Author: 闫龙科
 * @Date: 2019-11-08 14:58:45
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-08 15:10:15
 * @Description: 00
 */
const fs=require("fs")
let data=""
let readStream=fs.createReadStream("./timg.jpg")

readStream.on("data",(chunk)=>{
    console.log(chunk)
    data+=chunk
})
readStream.on("end",()=>{
    console.log(data)
})
readStream.on("error",(error)=>{
    console.log(error)
})
let writeStream=fs.createWriteStream("./test.jpg")

readStream.pipe(writeStream)