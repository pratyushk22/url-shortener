const URL= require('../models/url.js')

async function handle_shorturl(req,res){
    const shortID= req.params.shortID;

    const entry= await URL.findOneAndUpdate({
        shortID: shortID
    },{
        $push: {
            visitHistory: { timestamp: Date.now()},
        },
    })

    if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    res.redirect(entry.redirectURL);
};

module.exports= {handle_shorturl};