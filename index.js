const express= require("express");
const app= express();

app.use(express.json()); 
//connecting to mongodb
const {connect_to_mongodb}= require('./connection.js');

//receiving the routes
const urlRoute= require('./routes/url.js')

app.use('/url', urlRoute);

const shortURLRoute= require('./routes/shorturl.js');

app.use('/', shortURLRoute);

connect_to_mongodb('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log('mongodb server connected'));

const PORT= 8001;

app.listen(PORT, ()=>console.log(`server started at ${PORT}`));

