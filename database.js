const mongoose = require('mongoose');


const username = process.env.USERNAME || "maddi";
const password = process.env.PASWORD || "iiui";
const dbname = process.env.DB_NAME || "rentalsdb";
const port = process.env.PORT || 27017;
const host = process.env.HOST_NAME || "localhost";


const url = `mongodb://${username}:${password}@${host}:${port}/${dbname}`;
console.log(url);

mongoose.connect(url, {useNewUrlParser: true}, () => {
    console.log(`${dbname} connected!!`);
})
    .catch(err => {

        console.log(err);
    });

    


