const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/inotebook";

const connectToMongo = ()=>
{
    mongoose.connect(mongoUrl, ()=>
    {
        console.log("Connected to Database");
    }).catch (error => console.log(error));
}

module.exports = connectToMongo;