const router = require('express').Router();
const VideosRouter = require('./videos');
const CategoriasRouter = require('./categorias');

router.use('/videos', VideosRouter);
router.use('/categorias', CategoriasRouter);

module.exports = router;
