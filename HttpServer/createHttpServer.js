// createHttpServer.js
const http = require('http');

const createHttpServer = (port) => {
    if (typeof port !== 'number') {
        throw new Error('Invalid port number. Port must be a number.');
    }

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Server is running');
    });

    server.listen(port, () => {
        console.log(`✅ HTTP Server started on port ${port}`);
    });
};

module.exports = createHttpServer;
