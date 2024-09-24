const express = require('express');
const bodyParser =  require('body-parser');
const ejs = require('ejs');
const path = require('path');
const cors = require('cors');
const route = require('./routes/index')
const { PORT } = require('./config/serverConfig');

const app = express();


// body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// ejs setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// cors
app.use(cors());


// route
app.use('/', route);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})