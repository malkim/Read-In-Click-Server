var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const wordRoute = require('./routes/wordRoute')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/words', wordRoute)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const connectionParams = {
  newUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
// "mongodb+srv://Shani:<password>@Shani.3puzv.mongodb.net/Read-In-Click?retryWrites=true&w=majority"
mongoose.connect("mongodb://srv1:27017/Read-In-Click", connectionParams)
  .then(() => {
      console.log("connected to db");
  })
  .catch((err) => {
      console.log("error: " + err);

  })

module.exports = app;