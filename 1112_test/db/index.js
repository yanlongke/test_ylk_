// /*
//  * @Author: 闫龙科
//  * @Date: 2019-11-12 14:39:09
//  * @LastEditors: 闫龙科
//  * @LastEditTime: 2019-11-12 14:53:30
//  * @Description: 00
//  */
// let mysql=require("mysql")
// let connection=mysql.createConnection({
//     user:"root",
//     postword:"root",
//     host:"localhost",
//     port:"3309",
//     database:"yuekao_1029"
// })
// connection.connect((error)=>{
//     if(error)
//     {
//         console.log("连接失败")
//     }else{
//         console.log("连接成功")
//     }
// })
// module.exports=connection
/*
 * @Author: 闫龙科
 * @Date: 2019-11-11 15:25:17
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-11 15:35:55
 * @Description: 00
 */
const mysql = require('mysql');

const connection = mysql.createConnection({
    user:'root',
    password:'root',
    host:'localhost',
    port:'3306',
    database:'banner_list'
})

connection.connect((error) => {
    if(error){
        console.log("链接失败")
    }else{
        console.log("链接成功")
    }
})

module.exports = connection