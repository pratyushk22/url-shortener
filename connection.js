//to connect the api to the database

const mongoose= require('mongoose');

async function connect_to_mongodb(url){
    return mongoose.connect(url);
};

module.exports={
    connect_to_mongodb,
};