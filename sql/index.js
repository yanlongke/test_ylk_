/*
 * @Author: 闫龙科
 * @Date: 2019-11-12 14:38:43
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-12 16:46:37
 * @Description: 00
 */
let koa = require('koa')
let app = new koa()
let router = require('koa-router')()
let bodyparser = require('koa-bodyparser')
let query = require('./db/query')
app.use(bodyparser())
app.use(router.routes())
router.get('/api/list', async ctx => {  //list接口，查询list列表
  let data = await query('select * from list')
  console.log(data)
  ctx.body = data
})
router.get('/api/del', async ctx => {//删除接口
  let { id } = ctx.query //接收参数
  console.log(id)
  let res = await query('select * from list where id=?', [id]) //再list里面查询

  if (id) {
    //参数是否存在
    //存在
    if (res.data.length != 0) {
      //如果res里data长度不为零  证明查找到id所在的哪一行
      try {
        await query('delete from list where id=?', [id])//删除id所在的那一行
        ctx.body = {
          code: 1,
          msg: '删除成功'
        }
      } catch (e) {
        ctx.body = {
          code: 0,
          msg: e.error
        }
      }
    } else {
        //不存在
      ctx.body = {
        code: -1,
        msg: '此数据不存在'
      }
    }
  } else {//缺失参数
    ctx.body = {
      code: 3,
      msg: '请确认参数'
    }
  }
})
router.post('/api/add', async ctx => {//添加接口
  let { remark, type } = ctx.request.body

  if (remark && type) {
    //判断参数是否存在
    let newdata = new Date() //定义创建时间
    try {
      //insert into 表名 (字段1,字段2,字段3) values (?,?,?)
      //向数据库添加数据
      await query('insert into list (remark,type,create_time) values (?,?,?)', [
        remark,
        type,
        newdata
      ])
      ctx.body = {
        code: 1,
        msg: '添加成功'
      }
    } catch (e) {
      ctx.body = {
        code: 0,
        msg: e.error
      }
    }
  } else {
    //参数不存在
    ctx.body = {
      code: 4,
      msg: '请确认参数'
    }
  }
})

router.post('/api/updata', async ctx => {//修改接口
  let { remark, type, id } = ctx.request.body //接受参数
  if (remark && type && id) {
    //判断参数是否存在
    //存在
    let res = await query('select * from list where id=?', [id]) //在list里面查询id
    //res 返回的是对象{msg:"success",data:[]}
    let newdata = new Date() //定义创建的时间
    if (res.data.length == 0) {
      //如果res中的data长度weiling说明此id不存在
      ctx.body = {
        code: 4,
        msg: '此项数据不存在'
      }
    } else {
      //如果id存在
      try {
        //修改id所在一行的数据
        //sel update 表名 set 字段1=?,字段2=?,字段3=? where id=?"
        await query(
          'update list set remark=?,type=?,create_time=? where id=?',
          [remark, type, newdata, id]
        )
        ctx.body = {
          code: 1,
          msg: '修改成功'
        }
      } catch (e) {
        ctx.body = {
          code: 0,
          msg: e.error
        }
      }
    }
  } else {
    //参数不存在
    ctx.body = {
      code: -1,
      msg: '请确认参数'
    }
  }
})

router.get('/api/sort', async ctx => {//排序接口
  //排序接口  通过list里面的sort字段排序  desc或者asc 降序和升序
  let data = await query('select * from list order by sort desc')
  console.log(data)
  ctx.body = data
})
app.listen(3000, () => {
  console.log('3000端口启动成功')
})
