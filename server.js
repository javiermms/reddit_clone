const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Set db
require('./data/reddit-db');

app.get('/', (req, res) => {
  res.render('home')
})


// NEW
app.get('/posts/new', (req, res) => {
    res.render('posts-new', {});
})

require('./controllers/posts.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})