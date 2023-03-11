const customerordermodel=require("../../model/customer/customerorder");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types.ObjectId;


class customerorder {
	async postaddorder(req, res) {
		let { product,customerId,total,paymentmethod,orderdatetime,address,phonenumber} = req.body;
	
		try {
				let neworder = new customerordermodel({
					customerId: customerId,
					product:product,
					customerorderdatetime: orderdatetime,
					total: total,
					paymentmethod:paymentmethod,
					address:address,
					phonenumber: phonenumber,
					type: "customer",

				});
			let save = neworder.save();
        
			if (save) {
				return res.json({ success: "order create successfully" });
			  }
				

				// console.log(`statusCode: ${data.statusCode}`);
			
			
			return res.json({ success: "order create successfully" });
		} catch (err) {
			console.log(err);
		}
	}

	async getcustomerorder(req, res) {
		const customerorder = await customerordermodel.aggregate([
			{
				$lookup: {
					from: "products",
					localField: "productId",
					foreignField: "_id",
					as: "products",
				},
			},
			{
				$lookup: {
					from: "customers",
					localField: "customerId",
					foreignField: "_id",
					as: "customers",
				},
			},
		]);
		if (customerorder) {
			return res.status(200).json({ customerorder: customerorder });
		} else {
			return res.status(500).json({ error: "something went wrong" });
		}
	}
	
	async getorder(req, res) {
		let id = req.params.id;
		const data = await customerordermodel.find({ customerId: id });

		return res.json({ orderdata: data });
	}
}

const customerorder=new  customerorder();
module.exports=customerorder();