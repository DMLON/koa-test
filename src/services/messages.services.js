const messagesModel = require("../models/message.model");
const { loggerErrors } = require("../utils/loggers");


const messagesServices = {
    getAll: async () => {
        try {
            return await messagesModel.find();
        } catch (err) {
            loggerErrors.error(err);
        }
    },

    getById: async (id) => {
        try {
            return await messagesModel.findById(id);
        } catch (err) {
            loggerErrors.error(err);
        }
    },

    deleteById: async (id) => {
        try {
            return await messagesModel.findByIdAndDelete(id);
        } catch (err) {
            loggerErrors.error(err);
        }
    },

    updateById: async (id, newProps) => {
        try {
            return await messagesModel.findByIdAndUpdate(id, { ...newProps }, { new: true });
        } catch (err) {
            loggerErrors.error(err);
        }
    },

    createItem: async (item) => {
        try {
            return await messagesModel.create(item);
        } catch (err) {
            loggerErrors.error(err);
        }
    },
};

module.exports = messagesServices;
