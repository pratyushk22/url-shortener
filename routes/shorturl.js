const express= require('express');

const router= express.Router();

const {handle_shorturl}= require('../controllers/shorturl.js');

router.get('/:shortID', handle_shorturl);

module.exports= router;