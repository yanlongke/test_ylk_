/*
 * @Author: 闫龙科
 * @Date: 2019-11-11 14:28:10
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-11 15:10:45
 * @Description: 00
 */
let koa=require("koa")
let apr=require("koa-bodyparser")
let app=new koa()
app.use(async (ctx,next)=>{
    console.log(ctx.url)
    console.log("第一个中间件开始")
    let startTime=new Date().getTime()
    console.log(startTime)
    await next()
    console.log("第一个中间件结束")
    let endtime=new Date()*1
    let timer=endtime-startTime
    ctx.body=timer
})
app.use(async (ctx,next)=>{
    console.log("第二个中间件开始")
    await next()
    console.log("第二个中间件结束")
})
app.use(async (ctx,next)=>{
    console.log("第三个中间件开始")
    await next()
    console.log("第三个中间件结束")
})
app.listen(5580,()=>{
    console.log("3000端口启动成功")
})