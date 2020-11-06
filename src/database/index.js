const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/covidapi', { 
        useUnifiedTopology: true, useNewUrlParser: true 
        });
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = connectDB;