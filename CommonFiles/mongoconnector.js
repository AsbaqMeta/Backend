const mongoose = require('mongoose');

const mongoconnector = async function (uri) {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifindtopology: true,
        });
    return {
        isConnected: true,
        message: 'Successfully connected to MongoDB. '
    };
    }
    catch(e){
        return{
            isConnected: false,
            message: 'DataBase Connection failed. Error: ' + e
        };
    }
};