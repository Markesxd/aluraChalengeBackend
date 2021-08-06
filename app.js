const express = require('express');
const video = require('./controller/video');

const app = express();
app.use(express.json());

app.get("/videos", async (req, res) => {
  const pp = await video.all();
  res.send('<h1>' + pp + '</h1>');
});

app.listen(3333, () => console.log('Server Running!'));
