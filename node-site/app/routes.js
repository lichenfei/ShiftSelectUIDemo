//require express
var express = require('express');
var path = require('path');
var request = require('request');
var http = require('http');
var querystring = require('querystring');

var router = express.Router();

var token = 'JWT ';
var token2 = '';

var req = {
      // 'request': {
        // 'body': {
          'accountProvider':'apihealthcare.com',
          'accountIdentifier':'505c9300-31b9-83d3-76b9-b3433dbc82e0',
          'accountType': 'Mobile',
          'affiliationCode':'AP001025',
          'userName' : 'imisganaw',
          'password' : 'abcd1',
          'timeout' : '04:00:00'
        // }
      // }
    };

module.exports = router;

//route our app
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//about page
router.get('/about', function(req, res) {
  res.send('I am the about page');
});

// var request = require('request');

var options = {
  uri: 'https://dev.apihealthcare.com/workforce/integration/services/0.0.1/user/_login',
  body: JSON.stringify(req),
  headers: { 'Content-Type': 'application/json'}
  // path: '/workforce/integration/services/0.0.1/user/_login'
};
// var options = {
//   host: 'www.google.com',
//   path: '/search?q=restaurants&ct=ifl&cad=2:hungry&ei=Oo5PWNbkCcGmsAHgm6-oCQ&ved=&rct=j'
// };

request.post(options, function (error, response, body) {
    // initialize the container for our data
    var data = '';
    var jason_body = JSON.parse(body);
    // console.log(jason_body.token);
    token2 = token.concat(jason_body.token);
    // console.log(token2);
    // this event fires many times, each time collecting another piece of the response
    // http_res.on('data', function (chunk) {
    //     // append this chunk to our growing `data` var
    //     data += chunk;
    // });

    // this event fires *one* time, after all the `data` events/chunks have been gathered
    // http_res.on('end', function () {
    //     // you can use res.send instead of console.log to output via express
    //     console.log(data);
    // });
});

// var stock_url = 'http://finance.yahoo.com/webservice/v1/symbols/FB/quote?format=json&view=%E2%80%8C%E2%80%8Bdetail';
//
// request(stock_url, function (error, response, body) {
//   if(error){
//     console.log(error);
//   }else{
//     console.log(body);
//   }
    // if (!error && response.statusCode == 200) {
    //     var stock_data = body;
    //     console.log('Yahoo Finance API: ', stock_data)
    //     var stock_price = stock_data.list.resources[0].resource.fields.price;
    //     console.log('stock_price: ', stock_price);
    // };
// });

//about page
router.get('/shiftDetail', function(req, res) {
  var options_get = {
    uri: 'https://dev.apihealthcare.com/workforce/integration/services/0.0.1/scheduling/open-shift/142928/',
    // host: 'dev.apihealthcare.com',
    // path: '/workforce/integration/services/0.0.1/scheduling/open-shift/142928/',
    // method: 'GET',
    headers: {
      'Authorization': token2,
      // 'Content-Type': 'application/json',
      // 'accept': 'application/json'
      // 'Content-Length': Buffer.byteLength(data, 'utf8')
    }
    // path: '/workforce/integration/services/0.0.1/user/_login'
  };

  request.get(options_get, function (response) {
      // initialize the container for our data
      var data = '';
      var bodyChunks = [];
      // console.log(options_get);
      console.log(response);
      // console.log(body);

      // // this event fires many times, each time collecting another piece of the response
      // response.on('data', function (chunk) {
      //     // append this chunk to our growing `data` var
      //
      //     // data += chunk;
      //     // bodyChunks.push(chunk);
      //     console.log(chunk);
      // });
      //
      // // this event fires *one* time, after all the `data` events/chunks have been gathered
      // response.on('end', function () {
      //     // you can use res.send instead of console.log to output via express
      //     // var body = Buffer.concat(bodyChunks);
      //     // console.log(body);
      // });
  });

        // http.get({
        //         host: 'https://dev.apihealthcare.com',
        //         path: '/workforce/integration/services/0.0.1/scheduling/open-shift/142928/',
        //         headers: {'Authorization': 'JWT '+token}
        //     }, function(response) {
        //         // Continuously update stream with data
        //         var body = '';
        //         response.on('data', function(d) {
        //             body += d;
        //         });
        //         response.on('end', function() {
        //             console.log(body);
        //             return body;
        //
        //             // Data reception is done, do whatever with it!
        //             // var parsed = JSON.parse(body);
        //             // callback({
        //             //     email: parsed.email,
        //             //     password: parsed.pass
        //             // });
        //         });
        //     });

  // request (
  //     {url:'https://dev.apihealthcare.com/workforce/integration/services/0.0.1/user/_login',
  //
  //     body: req,
  //     headers: { 'Content-Type': 'application/json'}
  //     },
  //     function (error, response, body) {
  //       console.log(error);
  //         if (!error && response.statusCode == 200) {
  //             console.log(body);
  //             // token = response;
  //             return response;
  //             //make another call
  //             // return http.get({
  //             //         host: 'https://dev.apihealthcare.com',
  //             //         path: '/workforce/integration/services/0.0.1/scheduling/open-shift/142928/',
  //             //         headers: {'Authorization': 'JWT '+token}
  //             //     }, function(response) {
  //             //         // Continuously update stream with data
  //             //         var body = '';
  //             //         response.on('data', function(d) {
  //             //             body += d;
  //             //         });
  //             //         response.on('end', function() {
  //             //             console.log(body);
  //             //             return body;
  //             //
  //             //             // Data reception is done, do whatever with it!
  //             //             // var parsed = JSON.parse(body);
  //             //             // callback({
  //             //             //     email: parsed.email,
  //             //             //     password: parsed.pass
  //             //             // });
  //             //         });
  //             //     });
  //         }
  //     }
  // );
});
  //login to shift select
  // request.post(
  //     {url:'https://dev.apihealthcare.com/workforce/integration/services/0.0.1/user/_login',
  //
  //     body: req,
  //     headers: { 'content-type': 'application/json'}
  //     },
  //     function (error, response, body) {
  //         if (!error && response.statusCode == 200) {
  //             console.log(body)
  //             res.send({'employee': {
  //                         'id': '11111',
  //                         'time': '08:00 - 16:00',
  //                     }});
  //         }
  //         }
  //     }
  // );

//about page
router.get('/contact', function(req, res) {
  res.send('I am the contact page');
});

router.get('/contact');
router.post('/contact');
