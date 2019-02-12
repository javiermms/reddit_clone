require('dotenv').config();
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser()); // Add this after you initialize express.

// Add after body parser initialization!
app.use(expressValidator());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Set db
require('./data/reddit-db');

require('./controllers/posts.js')(app);
require('./controllers/comments.js')(app);
require('./controllers/auth.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;