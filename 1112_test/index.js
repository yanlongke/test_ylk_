/*
 * @Author: 闫龙科
 * @Date: 2019-11-12 19:06:15
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-12 19:26:22
 * @Description: 00
 */
let koa = require('koa')
let app = new koa()
let router = require('koa-router')()
let bodyparser = require('koa-bodyparser')
let query = require('./db/query')
app.use(bodyparser())
app.use(router.routes())

router.get("/api/getlist",(ctx)=>{
    let data=query("select * from list")
    ctx.body=data.data
})
router.post("/api/add",(ctx)=>{
    let {name,passowrd,address,sex}=ctx.request.body
    if(name&&passowrd&&address&&sex)
    {
    let res=query("insert into list (name,password,address,sex) values (?,?,?)",[name,passowrd,address])

    }
    else{
        ctx.body={
            code:3,
            msg:"参数缺失"
        }
    }

})

router