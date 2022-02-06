const productModel = require( "../models/product.model");

const productServices = {
		getAll: async () => {
				try {
						return await productModel.find();
				} catch (err) {
						console.log(err);
				}
		},

		getById: async (id) => {
				try {
						return await productModel.findById(id);
				} catch (err) {
						console.log(err);
				}
		},

		deleteById: async (id) => {
				try {
						return await productModel.findByIdAndDelete(id);
				} catch (err) {
						console.log(err);
				}
		},

		updateById: async (id, newProps) => {
				try {
						return await productModel.findByIdAndUpdate(id, { ...newProps }, { new: true });
				} catch (err) {
						console.log(err);
				}
		},

		createItem: async (item) => {
				try {
						return await productModel.create(item);
				} catch (err) {
						console.log(err);
				}
		},
};

module.exports = productServices;
