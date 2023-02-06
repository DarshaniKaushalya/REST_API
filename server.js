const express = require('express'); //use express module
const dotenv = require('dotenv');
const morgan = require('morgan'); //Morgan is a Node. js and Express middleware to log HTTP requests and errors.
const bodyparser = require('body-parser');
// Specifically in the context of a POST, PATCH, or PUT HTTP request where the information you want is contained in the body.
//Using body-parser allows you to access req.
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express(); //initialize app as express app

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets

//app.use()====> puts the specified middleware functions at the specified path.
//This middleware function will be executed only when the base of the requested path matches the defined path.
//express.static===>to serve static files
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
//css/style.css

// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
