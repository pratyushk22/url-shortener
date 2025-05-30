const express= require('express');

const router= express.Router();

//receiving a url post method controller function
const {handle_generate_new_url, handle_get_analytics}= require('../controllers/url.js')


//generate a new url and return shortened url( POST ROUTER )
router.post('/', handle_generate_new_url );

router.get('/analytics', handle_get_analytics);

module.exports= router;