const VideoRouter = require('express').Router();
const Video = require('../controller/video');


VideoRouter.get("/", async (req, res) => {
  const {search} = req.query;
  if(search){
    Video.search(search)
    .then((resolve) => res.json(resolve))
    .catch((reject) => res.status(400).json(reject));
    return;
  }
  Video.all()
  .then((resolve) => res.json(resolve))
  .catch((reject) => res.status(400).json(reject));
});

VideoRouter.get("/:id", async (req, res) => {
  const {id} = req.params;
  const video = await Video.one(id);
  res.status(200).json(video);
});

VideoRouter.post('/', async (req, res) => {
  const video = req.body;
  Video.post(video)
  .then((resolve) => res.status(201).json(video))
  .catch((reject) => res.status(400).json(reject));
})

VideoRouter.patch('/:id', async (req, res) => {
  const alteracoes = req.body;
  console.log(req.body)
  const {id} = req.params;
  Video.patch(id, alteracoes)
  .then((resolve) => res.status(200).json({...alteracoes, message: 'alterações feitas com sucesso'}))
  .catch((reject) => res.status(400).json(reject));
});

VideoRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  Video.delete(id)
  .then((resolve) => res.status(204).json({message: `video de id ${id} excluido`}))
  .catch((reject) => res.status(400).json(reject));
});

module.exports = VideoRouter;
