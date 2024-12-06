const mongoConnector = require('common/mongoconnector'); // Adjust path as needed
const config = require('./config');
const createHttpServer = require('./createHttpServer');

const startServer = async () => {
    try {
        console.log('🚀 Starting the server...');
        const dbStatus = await mongoConnector(config.mongoUri);
        console.log(dbStatus.message);

        if (!dbStatus.isConnected) {
            console.error('❌ Exiting due to database connection failure.');
            process.exit(1);
        }

        createHttpServer(config.httpPort);
        console.log(`✅ Server is running on port ${config.httpPort}`);
    } catch (error) {
        console.error(`⚠️ Unexpected error: ${error.message}`);
        process.exit(1);
    }
};

startServer();
