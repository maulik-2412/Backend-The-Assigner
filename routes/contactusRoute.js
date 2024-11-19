
const contactUs=require("../controllers/contactUs.controller")
const express = require("express");
const router = express.Router();

router.post("/",contactUs );

module.exports = router;
