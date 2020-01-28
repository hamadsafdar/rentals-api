const mongoose = require('mongoose');


const username = process.env.USERNAME || "maddi";
const password = process.env.PASWORD || "iiui";
const dbname = process.env.DB_NAME || "rentalsdb";
const port = process.env.PORT || 27017;
const host = process.env.HOST_NAME || "localhost";

const mongodb = 'mongodb+srv://maddi:iiui@cluster0-h8is1.mongodb.net/test?retryWrites=true&w=majority';

const url = `mongodb://${username}:${password}@${host}:${port}/${dbname}`;
console.log(url);

mongoose.connect(url, {useNewUrlParser: true});

    


module.exports.connect = () => {
    mongoose.connect(mongodb, {useNewUrlParser: true});
}