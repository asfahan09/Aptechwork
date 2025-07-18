const User = require("../collection/User")
let bb = require("bcrypt");
let all_fun ={
Register : async function (req,res) {
   let { n ,e , p } = req.body;
   let email_check = await User.findOne({email:e})
   if (email_check) {
    res.status(409).json({msg : "Email already exist"})
   } else{
    let hashed_p = bb.hashSync(p,15)
    let u = new User({
        name: n,
        email : e,
        password: hashed_p
    
    
       })
       await u.save()
       res.status(200).json({msg:"data send"})
    } 
   },


Login:  async function (req,res) {
    res.send(" wellcome Login page ");
    res.end();
} ,


}

module.exports = all_fun
