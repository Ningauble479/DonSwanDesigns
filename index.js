var express = require("express");
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
var routes = require('./server/Routes')
var app = express();
var port = process.env.PORT || 8080;
//var db = require('./models')

// const stripe = Stripe(apiKeySecret);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', routes);



const dbRoute = process.env.DB_ROUTE

mongoose.connect(dbRoute, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

let DB = mongoose.connection;

DB.once('open', () => console.log('connected to the database'));
DB.on('error', console.error.bind(console, 'MongoDB connection error:'));


//db.sequelize.sync({ force: true}).then(function() {
    app.listen(port, function() {
      console.log("App listening on PORT " + port);
    });
//  });

var path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

