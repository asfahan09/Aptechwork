
require("dotenv").config();
let exp = require("express");
let route = require("./Routes/routes")
let port_no = process.env.PORT || 4001
let db = require("./connection")
let cor =require("cors");

 let app = exp ()


app.use(exp.json())
app.use(cor())
app.use("/lala/", route);

db().then(()=>{
app.listen(port_no , function () {
    console.log(`server at started at http://localhost:${port_no}/lala/`);
})


}).catch((e)=>{
    console.log(e);
})