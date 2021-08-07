const express = require('express');
const Video = require('./controller/video');

const app = express();
app.use(express.json());

app.get("/videos", async (req, res) => {
  const videos = await Video.all();
  res.status(200).json(videos);
});

app.get("/videos/:id", async (req, res) => {
  const {id} = req.params;
  const video = await Video.one(id);
  res.status(200).json(video);
});

app.post('/videos', async (req, res) => {
  const video = req.body;
  Video.post(video)
  .then((resolve) => res.status(201).json(video))
  .catch((reject) => res.status(400).json(reject));
})

app.patch('/videos/:id', async (req, res) => {
  const alteracoes = req.body;
  const {id} = req.params;
  Video.patch(id, alteracoes)
  .then((resolve) => res.status(200).json({...alteracoes, message: 'alterações feitas com sucesso'}))
  .catch((reject) => res.status(400).json(reject));
});

app.delete('/videos/:id', async (req, res) => {
  const {id} = req.params;
  Video.delete(id)
  .then((resolve) => res.status(204).json({message: `video de id ${id} excluido`}))
  .catch((reject) => res.status(400).json(reject));
});

app.listen(3333, () => console.log('Server Running!'));
