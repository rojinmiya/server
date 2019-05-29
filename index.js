const express = require('express');
const app =express();

const stickers=require('./api/stickers')
app.use('/api/v1/stickers', stickers);


app.listen(8000);