//provides a random url
const {nanoid}= require('nanoid');

const URL= require('../models/url.js')

// generates new url for route.post(url)

async function handle_generate_new_url(req,res){
    const body= req.body;
    if(!body.url) res.status(400).json({'error':'url required'});

    const shortID= nanoid(8);
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({id: shortID});
};

async function handle_get_analytics(req,res){
    const shortID= req.params.shortID;
    const result= await URL.findOne({shortID});

    return res.json({totalclicks: result.visitHistory.length,
                     analytics: result.visitHistory,
    });
};

module.exports={
    handle_generate_new_url,
    handle_get_analytics,
};