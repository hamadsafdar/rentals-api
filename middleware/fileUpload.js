const multer = require('multer');
const path = require('path');




//set storage engine

const dest = '../public/uploads';


const storage = multer.diskStorage({
    destination: dest,

    filename: (req, file, callback) => {
        callback(null, req.session.username + '-' + file.fieldname + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

module.exports = {
    upload
}