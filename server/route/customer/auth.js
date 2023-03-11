const express = require("express");
const router = express.Router();
const customerauthcontroller = require("../../controller/customer/auth");
const multer = require("multer");

router.post("/customersignup",customerauthcontroller.postSignup);
router.post("/customersignin",customerauthcontroller.postSignin);
router.get("/allcustomer",customerauthcontroller.getallcustomer);


module.exports=router;