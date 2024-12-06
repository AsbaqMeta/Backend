const express = require('express');

const createHttpServer = function (port) {
    var app = express();

    app.unsubscribe(express.urlencoded({ extended: true }));

    app.listen(port, () => {
        console.log('HTTP Server started: Port: ' + port);
    });
};

module.exports = createHttpServer;