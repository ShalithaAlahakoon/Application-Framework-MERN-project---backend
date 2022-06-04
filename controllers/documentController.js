const path = require('path');
const express = require('express');
const multer = require('multer');
const Documents = require('../models/Document');
const Router = express.Router();
const asyncHandler = require('express-async-handler');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 5000000 // max file size 5MB = 5000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

Router.post(
  '/upload',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, description, groupID, type } = req.body;
      const { path, mimetype } = req.file;
      const file = new Documents({
        groupID,
        type,
        title,
        description,
        file_path: path,
        file_mimetype: mimetype
      });
      const fileSaved = await file.save();
      if (fileSaved) {
        res.status(200).json({
          success: true,
          data: fileSaved
        });
      } else {
        res.status(400).json({
          success: false,
          message: 'No file uploaded'
        });
      }

    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);


Router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await Documents.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

Router.get('/download/:id', async (req, res) => {
  try {
    const file = await Documents.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});


module.exports = Router