

var a=require("express")
var b=a()
b.use(a.json())
var {LocalStorage}=require("node-localstorage")
const shashi=new LocalStorage("./localstorage")

b.post("/register",(req,res)=>{
    shashi.setItem("task2",JSON.stringify(req.body))
    const sky=shashi.getItem("task2")
    res.json("success")
})
 b.listen(3003,()=>{
        console.log("ok");
     })
