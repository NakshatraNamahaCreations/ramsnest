const express = require("express");
const router = express.Router();
const customerauthcontroller = require("../../controller/customer/auth");
const multer = require("multer");

router.post("/customersignup",customerauthcontroller.postSignup);
router.post("/customersignin",customerauthcontroller.postSignin);

module.exports=router;