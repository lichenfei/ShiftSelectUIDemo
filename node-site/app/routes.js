//require express
var express = require('express');
var path = require('path');

var router = express.Router();

module.exports = router;

//route our app
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//about page
router.get('/about', function(req, res) {
  res.send('I am the about page');
});

//about page
router.get('/shiftDetail', function(req, res) {
  res.send({'employee': {
              'id': '11111',
              'time': '08:00 - 16:00',
          }});
        });

//about page
router.get('/contact', function(req, res) {
  res.send('I am the contact page');
});

router.get('/contact');
router.post('/contact');
