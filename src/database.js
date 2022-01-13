import  Mongoose  from "mongoose";
const mongoose = require('mongoose');

const { MONGODB_HOST, MONGODB_DATABASE } = process.env
const MONGODB_URI = 'mongodb+srv://JehanCVeracierta:.1234@cluster0.fllnf.mongodb.net/weToLive?retryWrites=true&w=majority'
// const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log('database is connected'))
    .catch(err => console.log(err));
