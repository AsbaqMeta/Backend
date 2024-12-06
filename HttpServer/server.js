const mongoConnector = require('common/mongoconnector');
const config = require('./config');
const createHttpServer = require('./createHttpServer');

// Server Initialization
const startServer = async () => {
    try {
        console.log('🚀 Starting the server...');

        // Attempt MongoDB connection
        const dbStatus = await mongoConnector(config.mongoUri);
        console.log(dbStatus.message);

        if (!dbStatus.isConnected) {
            console.error('❌ Exiting due to database connection failure.');
            process.exit(1); // Exit if DB connection fails
        }

        // Start HTTP server
        createHttpServer(config.httpPort);
        console.log(`✅ Server is running on port ${config.httpPort}`);
    } catch (error) {
        console.error(`⚠️ Unexpected error: ${error.message}`);
        process.exit(1); // Exit with failure status for unexpected errors
    }
};

// Start the server
startServer();
