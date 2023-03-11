const express=require("express");
const router=express.Router();
const customerorder=require("../../controller/customerController/customerorder");

router.post("/customer/addorder",customerorder.postcusorder);
router.get("/getcustomerorder",customerorder.postcusorder);
router.get("/getorder/:id",customerorder.getorder);
router.get("/getallcustomerorders",customerorder.getallcustomerorder);
router.post("/postcancelled/:id",customerorder.postcancelorder);

module.exports=router;

