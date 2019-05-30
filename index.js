const express = require('express');
const app =express();
const bodyParser=require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const stickers=require('./api/stickers')
app.use('/api/v1/stickers', stickers);


app.listen(8000);