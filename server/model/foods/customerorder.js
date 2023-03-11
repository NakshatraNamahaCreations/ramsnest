const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: ObjectId,
      required: true,
    },
    customerorderdatetime: {
      type: String,
    },
    food: {
      type: Array,
    },
    roomname: {
      type: String,
    },
    roomnumber: { 
        type: String 
    },
    foodid: {
      type: String,
    },
    customername: {
      type: String,
    },
  },
  { timestamps: true }
);

const customerordermodel = mongoose.model("customerorder", orderSchema);
module.exports = customerordermodel;
