const express = require('express'),
      parseIt = require('./parseIt'),
      multer  = require('multer'),
      crypto  = require('crypto'),
      mime    = require('mime'),
      upload  = multer({
        storage: multer.diskStorage({
          destination: function (req, file, cb) {
            cb(null, './uploads/')
          },
          filename: function (req, file, cb) {
            crypto.pseudoRandomBytes(16, function (err, raw) {
              cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
            });
          }
        })
      });



module.exports = upload;   