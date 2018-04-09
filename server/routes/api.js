const express = require('express');
const router = express.Router();
var User = require('../models/user/user.js');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/users', (req, res) => {
  //Get users list from mongodb
  User.find({}, function(err, users){
    if(err) throw err;
    res.status(200).json(users);
  });
});

module.exports = router;