const mongoose=require("mongoose");
const {ObjectId} =mongoose.Schema.Types;

const customerSchema=new mongoose.Schema({

    customerId:{
        type:ObjectId,
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    },
    phonenumber:{
        type:String
    }

})
const customermodel=mongoose.model("customers",customerSchema);
module.exports=customermodel;