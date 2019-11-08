/*
 * @Author: 闫龙科
 * @Date: 2019-11-04 10:11:27
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-04 10:21:04
 * @Description: 00
 */
let koa=require("koa")
let app=new koa()
let static=require("koa-static")
let path=require("path")
let staticPath=path.join(process.cwd(),"index.js")
app.use(static(staticPath))
module.exports=app