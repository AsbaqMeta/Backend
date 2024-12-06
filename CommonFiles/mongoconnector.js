const mongoose = require('mongoose');

// MongoDB Connection Function
const mongoConnector = async (uri) => {
    try {
        await mongoose.connect(uri);
        return {
            isConnected: true,
            message: '✅ Successfully connected to MongoDB.',
        };
    } catch (error) {
        return {
            isConnected: false,
            message: `❌ Database Connection failed. Error: ${error.message}`,
        };
    }
};

module.exports = mongoConnector;
