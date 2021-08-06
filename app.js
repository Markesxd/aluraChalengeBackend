const express = require('express');
const Video = require('./controller/video');

const app = express();
app.use(express.json());

app.get("/videos", async (req, res) => {
  const videos = await Video.all();
  res.send('<h1>' + videos + '</h1>');
});

app.get("/videos/:id", async (req, res) => {
  const {id} = req.params;
  const video = await Video.one(id);
  res.send('<h1>' + video + '</h1>');
});

app.listen(3333, () => console.log('Server Running!'));
