const express = require('express');
const { router } = require('../app');
const artistController = require('../controllers/artist');

const artistRouter = express.Router();

artistRouter.post('/', artistController.createArtist);

artistRouter.get('/', artistController.getAllArtists);

module.exports = artistRouter;