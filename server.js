'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
// const users = require('./routes/users');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

let happyhours = require('./routes/happyhoursroutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.disable('x-powered-by');

app.use(morgan('short'));
app.use(bodyParser.json()); //allows us to use request.body to retrieve data from front-end
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
// app.use(users);

app.use(express.static(path.join('public'))); //gives us access to public folder

app.use(happyhours); //allows us to use our routes

app.use(function(req, res) {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

module.exports = app;
