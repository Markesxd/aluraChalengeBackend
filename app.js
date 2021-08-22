const express = require('express');
const router = require('./routs/');
const bodyParser =require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(router);

app.listen(3333, () => console.log('Server Running!'));
