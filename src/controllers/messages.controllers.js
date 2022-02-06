const messagesServices = require("../services/messages.services");

const messageControllers = {
    getMessages: async (ctx) => {
        try {
            const messages = await messagesServices.getAll();
            if (messages) ctx.body = messages;
            else ctx.throw(404, { message: "No messages found" });
        } catch (err) {
            ctx.body = err;
        }
    },

    getMessageById: async (ctx) => {
        const { id } = ctx.params;

        try {
            const message = await messagesServices.getById(id);
            if (message) ctx.body = message;
            else ctx.throw(404, { message: "message not found" });
        } catch (err) {
            ctx.body = err;
        }
    },

    deleteMessage: async (ctx) => {
        const { id } = ctx.params;

        try {
            const deleted = await messagesServices.deleteById(id);
            if (deleted) ctx.body = { deleted };
            else ctx.throw(404, { message: "message not found" });
        } catch (err) {
            ctx.body = err;
        }
    },

    updateMessage: async (ctx) => {
        const { id } = ctx.params;
        const { body } = ctx.request;

        try {
            const updated = await messagesServices.updateById(id, body);
            if (updated) ctx.body = { updated };
            else ctx.throw(404, { message: "message not found" });
        } catch (err) {
            ctx.body = err;
        }
    },

    createMessage: async (ctx) => {
        const { body } = ctx.request;
        body.date = new Date();
        try {
            const newmessage = await messagesServices.createItem(body);
            if (newmessage) ctx.body = { newmessage };
            else ctx.throw(404, { message: "Error creating message" });
        } catch (err) {
            ctx.body = err;
        }
    },
};

module.exports = messageControllers;
