const multer = require('multer');
const path = require('path');


const dest = '../public/uploads';

const fileFilter = (req, file, callback) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      callback(null, true);
    } else {
      callback(null, false);
    }
  };


const storage = multer.diskStorage({
    destination: dest,

    filename: (req, file, callback) => {
        callback(null, req.session.userId + '-' + file.fieldname + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});



module.exports = upload;