
const fs = require('fs');
const path = require('path');

exports.uploadImage = (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files were uploaded' });
    }
    
    const uploadedFile = req.files.image;
    const uploadPath = path.join(__dirname, '..', 'uploads', uploadedFile.name);

    uploadedFile.mv(uploadPath, err => {
      if (err) {
        return res.status(500).json({ message: 'Error uploading file' });
      }
      res.status(200).json({ message: 'File uploaded successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
