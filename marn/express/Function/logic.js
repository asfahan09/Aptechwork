const User = require("../collection/User")
let bb = require("bcrypt");
let mail = require("nodemailer");

 let secure_info = mail.createTransport({
    service : "gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSKEY,

    }
 })

let all_fun ={
Register : async function (req,res) {
   let { n ,e , p } = req.body;
   let email_check = await User.findOne({email:e})
   if (email_check) {
    res.status(409).json({msg : "Email already exist"})
   } 
   
   else{
    let hashed_p = bb.hashSync(p,15)
    let u = new User({
        name: n,
        email : e,
        password: hashed_p
    
    
       })
       await u.save()
       res.status(200).json({msg:"data send"})
       

       let Emailbodyinfo ={
        to : e,
        from: process.env.EMAIL,
        subject : "Account has been register",
        html : `<h1>hello ${n}</h1>`
       }

      
     secure_info.sendMail(Emailbodyinfo, function (e,i) {
        if (e) {
            console.log(e)
        }
        else{
            console.log("email has been send")
        }
     })
 


    } 
    
   },

Read:async function (req,res) {
    try {
        let user_data = await User.find()
        res.status(201).json(user_data)
    } catch (error) {
        console.log(error.msg)
        res.status(504).json({msg: error.msg})
    }
}

}

module.exports = all_fun
