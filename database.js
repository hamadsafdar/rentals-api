const mongoose = require('mongoose');


const username =  "maddi";
const password = process.env.PASWORD || "iiui";
const dbname = process.env.DB_NAME || "rentalsdb";
const port = process.env.PORT || 27017;
const host = process.env.HOST_NAME || "localhost";

const atlas = 'mongodb+srv://maddi:iiui@cluster0-h8is1.mongodb.net/test?retryWrites=true&w=majority';

const url = `mongodb://${username}:${password}@${host}:${port}/${dbname}`;
console.log(url);

mongoose.Promise = global.Promise;






module.exports.connect =  () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log(`Connected to DB!`);
    })
    .catch(err => {
        console.log(`Connection Failed!`);
        console.log(err);
    });
    
}