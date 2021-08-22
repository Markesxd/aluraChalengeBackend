const CategoriasRouter = require('express').Router();
const Categorias = require('../controller/categorias');

CategoriasRouter.get('/', async (req, res) => {
    Categorias.all()
    .then((resolve) => res.json(resolve))
    .catch((reject) => res.status(400).json(reject));
});

CategoriasRouter.get('/:id', async(req, res) => {
  const {id} = req.params;
  Categorias.one(id)
  .then((resolve) => res.send(resolve))
  .catch((reject) => res.status(400).json(reject));
});

CategoriasRouter.post('/', async(req,res) => {
  const categoria = req.body;
  Categorias.post(categoria)
  .then((resolve) => res.status(201).json({...categoria, id: resolve.insertId}))
  .catch((reject) => res.status(400).json(reject));
});

CategoriasRouter.patch('/:id', async(req, res) => {
  const params = {
    id: req.params.id,
    fields: req.body
  };
  Categorias.patch(params)
  .then(async (resolve) => {
    const categoria = await Categorias.one(req.params.id);
    res.json(categoria);
  })
  .catch((reject) => res.status(400).json(reject));
});

CategoriasRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  Categorias.delete(id)
  .then((resolve) => res.status(204).json(resolve))
  .catch((reject) => res.status(400).json(reject));
})

module.exports = CategoriasRouter;
