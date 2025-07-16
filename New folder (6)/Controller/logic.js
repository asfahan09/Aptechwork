const User = require("../Collection/User")

const pages = {
    Register : async function (req, res){
        const {Name, email ,password ,Age} = req.body;
        const Users = new User({
            name : Name,
            email : email,
            password :   password,
            age : Age,

        })
        await Users.save()
        res.status(200).json({msg : "Data Save"})
        
    },
    login : async function (req,res){
        res.send("login page")
        req.end();
    } 
}

module.exports = pages