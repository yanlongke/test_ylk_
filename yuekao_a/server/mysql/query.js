/*
 * @Author: 闫龙科
 * @Date: 2019-11-11 15:28:52
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-11 15:29:35
 * @Description: 00
 */
const connect = require('./index');

module.exports = (sql,params=[]) => {
    return new Promise((resolve,reject) => {
        connect.query(sql,params,(error,data) => {
            if(error){
                reject({msg:'error',error})
            }else{
                resolve({msg:'success',data})
            }
        })
    })
}