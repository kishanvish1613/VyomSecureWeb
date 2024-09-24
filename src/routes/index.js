const express = require('express');

const route = express.Router();

route.get('/', (req, res) =>{
    try {
        res.render('home');
    } catch (error) {
        throw new error;
    }
})

route.get('/about', (req, res) => {
    try {
        res.render('about');
    } catch (error) {
        throw new error;
    }
})

route.get('/services', (req, res) => {
    try {
        res.render('our-services');
    } catch (error) {
        throw new error;
    }
})

route.get('/contact', (req, res) => {
    try {
        res.render('contact-us');
    } catch (error) {
        throw new error;
    }
})

module.exports = route;