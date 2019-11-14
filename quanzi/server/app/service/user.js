/*
 * @Author: 闫龙科
 * @Date: 2019-11-14 19:17:16
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-14 20:10:46
 * @Description: 00
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async regist(username,password,age) {//注册接口
    if(username&password&age)
    {
        let data=await this.app.mysql.query("select * from userlist where username=?",username)
        if(data.length!=0)
        {
            return {code:0,msg:"用户已存在"}
        }else{
            let data=await this.app.mysql.query("insert into userlist (username,password,age) values (?,?,?)",[username,password,age])
            
            if(data)
            {
                return {code:1,msg:"注册成功"}
        
            }else{
                return {code:0,msg:"注册失败"}
            }
        }
    }else{
        return {code:-1,msg:"参数缺失"}
    }
   
  }
  async login(username,password){//登录接口
      if(username&&password)
      {
        try{
            let data=await this.app.mysql.query("select * from userlist where username=? and password=?",[username,password])
            return {code:1,msg:"登录成功",data:data}
        }catch(e)
        {
            return {code:0,msg:"账号或者密码错误"}
        }
      }else{
          return {code:-1,msg:"参数缺失"}
      }
  }
  async update(id,username,password,age){//修改密码
    if(id&&username&&password&&age)
    {   
        try{
            let data=await this.app.mysql.query("select * from userlist where id=?",id)
            console.log(data)
            if(data.length!=0){
                let res=await this.app.mysql.query("update userlist set username=?,password=?,age=? where id=?",[username,password,age,id])
                console.log(res)
                return {code:1,msg:"修改成功"}
            }else{
                return {code:-2,msg:"此id不存在"}
            }
        }catch(e){
            return {code:0,msg:"修改失败"}
        }
    }else{
        return {code:-1,msg:"参数缺失"}
    }
  }
  async del(id){ //注销接口
    console.log(id)
    if(id)
    {
        let res=await this.app.mysql.query("select * from userlist where id=?",id)
        if(res.length!=0)
        {
            try{
                await this.app.mysql.query("delete from userlist where id=?",id)
                return {code:1,msg:"注销成功"}
            }catch(e)
            {
                return {code:0,msg:e}
            }
        }else{
            return {code:-2,msg:"此id不存在无法删除"}
        }
    }else{
        return {code:-1,msg:"参数缺失"}
    }
  }
  async my(id){//详情接口
      if(id)
      {
         try{
             let data=await this.app.mysql.query("select * from userlist where id=?",id)
             if(data.length!=0)
             {
                 return {code:1,data:data,msg:"查询成功"}
             }else{
                 return {code:0,msg:"此id不存在"}
             }
         }catch(e)
         {
             return {code:2,msg:e}
         }
      }else{
          return {code:-1,msg:"参数缺失"}
      }
  }
}

module.exports = UserService;
