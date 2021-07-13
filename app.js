var createError = require('http-errors');
var express = require('express');
const router = express.Router();

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const getWordRoute = require('./routes/getWordRoute')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const env = require('dotenv');
env.config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use()

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/words', getWordRoute)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
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
var MongoClient = require('mongodb').MongoClient;
var urlToCreate = "mongodb://srv1:27017/Read-In-Click"; //srv1 in the seminar network. use localhost at home
var url = "mongodb://srv1:27017/";

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({ username }, TOKEN_SECRET);
};

router.get("/createDB", (req, res) => {
  MongoClient.connect(urlToCreate, function (err, db) {
    console.log("err", err)
    if (err) {
      console.error(err)
    } else {
      console.log("Database created!");
      db.close();
    }
    res.send();
  });
})

router.get("/createUserColection", () => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Read-In-Click");
    dbo.createCollection("users", function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
})

//"mongodb://localhost:27017/Read-In-Click"
// "mongodb+srv://Shani:sssnnn334@cluster0.3puzv.mongodb.net/Read-In-Click?retryWrites=true&w=majority"
// "mongodb+srv://Shani:sssnnn334@cluster0.3puzv.mongodb.net/Read-In-Click?retryWrites=true&w=majority"
mongoose.connect("mongodb://srv1:27017/Read-In-Click", connectionParams)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error: " + err);

  })

module.exports = app;
