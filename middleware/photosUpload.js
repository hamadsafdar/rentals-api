const multer = require('multer');
const path = require('path');



const dest = 'public/uploads/postphotos';

const fileFilter = (req, file, callback) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    console.log(file.originalname + ' accepted!');
    callback(null, true);
  } else {
    callback(null, false);
    console.log(file.originalname + ' ' + 'Rejected!!');
  }
};


const storage = multer.diskStorage({
  destination: dest,

  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.fieldname + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});




module.exports = upload;