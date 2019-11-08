/*
 * @Author: 闫龙科
 * @Date: 2019-11-08 19:55:55
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-08 20:08:55
 * @Description: 00
 */
let childProcess=require("child_process")
const http=require("http")
const cpuLen=require("os").cpus().length;

const  server=http.createServer()
server.listen(3000)

let workers={}

function createProcess()
{
    let worker=childProcess.fork("./worker.js")
    worker.send("server",server)
    workers[worker.pid]=worker

    worker.on("exit",()=>{
        createProcess()
    })
    worker.on("message",(error)=>{
        console.log("error",error)
    })
}
for(let i=0;i<cpuLen;i++)
{
    createProcess()
}
console.log(process.pid)
process.on("exit",()=>{
        for(let o in workers)
        {
            workers[i].kill
        }
})


