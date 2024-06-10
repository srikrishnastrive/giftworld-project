const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, '/src/uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  }
});

module.exports =storage;