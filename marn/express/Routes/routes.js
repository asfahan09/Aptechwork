let all = require("../Function/logic");
let exp = require("express");
let r = exp.Router();
r.post("/",all.Register);
r.get("/Login",all.Login);


module.exports = r
