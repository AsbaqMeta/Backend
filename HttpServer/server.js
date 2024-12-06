const mongoConnector = require('common/mongoconnector');
const config = require('./config');
const createHttpServer = require('./createHttpServer');

const startServer = async () => {
    try {
        console.log('🚀 Starting the server...');

        // Attempt to connect to the database
        const dbStatus = await mongoConnector(config.mongoUri);
        console.log(dbStatus.message);

        // If the database is connected, start the HTTP server
        if (dbStatus.isConnected) {
            createHttpServer(config.httpPort);
            console.log(`✅ Server is running on port ${config.httpPort}`);
        } else {
            console.error('❌ Database connection failed. Exiting...');
            process.exit(1); // Exit with failure status
        }
    } catch (error) {
        // Handle unexpected errors
        console.error(`⚠️ Unexpected error: ${error.message}`);
        process.exit(1); // Exit with failure status
    }
};

// Start the server
startServer();
