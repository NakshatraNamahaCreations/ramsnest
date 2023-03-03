const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema.Types;

const packageSchema=new mongoose.Schema({
    adminid:{
        type:ObjectId,
        ref:'admins'
    },
    packagename:{
        type:String,
    },
    packageimage:{
        type:String,
    },
    packageprice:{
        type:String,
    },
    packagefeature:{
        type:String,
    },
    indoorgames:{
        type:String
    },
    outdoorgames:{
        type:String
    },
    swimmingpool:{
        type:String
    },
    offerprice:{
        type:String
    }

});
const packagemodel=mongoose.model("package",packageSchema);
module.exports=packagemodel;