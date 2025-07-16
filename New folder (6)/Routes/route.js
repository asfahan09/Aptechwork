const p = require ("../Controller/logic")
const exp = require("express")
const router = exp.Router();
router.post("/",p.Register)
router.get("/b",p.login)

module.exports = router
