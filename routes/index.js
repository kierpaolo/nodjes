const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render ('home')
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/kier', (req, res) => {
    res.render('kier')
});

router.get('/paolo', (req, res) => {
    res.render('paolo')
});

router.get('/pineda', (req, res) => {
    res.render('pineda')
});

module.exports = router;