const productServices = require("../services/products.services");

const productControllers = {
    getProducts: async (ctx) => {
        try {
            const products = await productServices.getAll();
            if (products) ctx.body = products;
            else ctx.throw(404, { message: "No products found" });
        } catch (err) {
            ctx.body = err;
        }
    },

    getProductById: async (ctx) => {
        const { id } = ctx.params;

        try {
            const product = await productServices.getById(id);
            if (product) ctx.body = product;
            else ctx.throw(404, { message: "Product not found" });
        } catch (err) {
            ctx.body = err;
        }
    },

    deleteProduct: async (ctx) => {
        const { id } = ctx.params;

        try {
            const deleted = await productServices.deleteById(id);
            if (deleted) ctx.body = { deleted };
            else ctx.throw(404, { message: "Product not found" });
        } catch (err) {
            ctx.body = err;
        }
    },

    updateProduct: async (ctx) => {
        const { id } = ctx.params;
        const { body } = ctx.request;

        try {
            const updated = await productServices.updateById(id, body);
            if (updated) ctx.body = { updated };
            else ctx.throw(404, { message: "Product not found" });
        } catch (err) {
            ctx.body = err;
        }
    },

    createProduct: async (ctx) => {
        const { body } = ctx.request;

        try {
            const newProduct = await productServices.createItem(body);
            if (newProduct) ctx.body = { newProduct };
            else ctx.throw(404, { message: "Error creating product" });
        } catch (err) {
            ctx.body = err;
        }
    },
};

module.exports = productControllers;
