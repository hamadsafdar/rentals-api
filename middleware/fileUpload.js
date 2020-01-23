const multer = require('multer');
const path = require('path');




//set storage engine

const dest = '../public/uploads';
const filename = 'Username';

const storage = multer.diskStorage({
    destination: dest,

    filename: (req, file, callback) => {
        callback(null, filename + '-' + Date.now() + path.extname(file.originalname));
    }
});