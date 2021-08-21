const router = require('express').Router();
const VideosRouter = require('./videosRouter');

router.use('/videos', VideosRouter);

module.exports = router;
