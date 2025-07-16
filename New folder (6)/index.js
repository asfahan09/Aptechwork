require("dotenv").config();

const cors = require ("cors");
const exp = require("express");
const db= require("./Connection")
const router = require("./Routes/route")

const app = exp();
app.use(cors())
app.use(exp.json())
app.use("/",router);


db().then(()=>{
    app.listen(3001,() => {
        console.log("Server Started at http://localhost:3001/")
    })

}).catch ((e)=>{
    console.log(e)
})



