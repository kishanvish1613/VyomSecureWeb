const express = require('express');
const { submitForm } = require('../controllers/form-controller');

const route = express.Router();

route.get('/', (req, res) => {
    try {
        res.render('home');
    } catch (error) {
        console.log(error);        
    }
});

route.post('/submit', submitForm);

module.exports = route;