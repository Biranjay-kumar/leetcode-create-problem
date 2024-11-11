const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB() {
    try {
        // Connect to MongoDB with options
        await mongoose.connect(ATLAS_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if (NODE_ENV === "development") {
            console.log('Connected to the database in development mode');
        } else {
            console.log('Successfully connected to the database');
        }
    } catch (error) {
        console.error('Unable to connect to the DB server');
        console.error(error);
    }
}

module.exports = connectToDB;
