/*
 * @Author: 闫龙科
 * @Date: 2019-11-12 14:41:38
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-12 14:44:12
 * @Description: 00
 */
let connect=require("./index")

module.exports=(sql,params=[])=>{
    return new Promise((resolve,reject)=>{
        connect.query(sql,params,(error,data)=>{
            if(error)
            {
                reject({msg:"error",error})
            }else{
                resolve({msg:"succect",data})
            }
        })
    })
}