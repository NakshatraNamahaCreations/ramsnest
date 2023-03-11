const express=require("express");
const router=express.Router();

const adminlogincontroller =require("../../controller/admin/adminlogin");

router.post("/adminsignup",adminlogincontroller.signup);
router.post("/adminsignin",adminlogincontroller.postSignin);

module.exports=router;
