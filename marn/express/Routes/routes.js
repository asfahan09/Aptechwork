let all = require("../Function/logic");
let exp = require("express");
let r = exp.Router();
r.post("/",all.Register);
r.get("/Read",all.Read);


module.exports = r
