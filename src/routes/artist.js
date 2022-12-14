const express = require('express');
const { router } = require('../app');
const artistController = require('../controllers/artist');

const artistRouter = express.Router();

artistRouter.post('/', artistController.createArtist);

artistRouter.get('/', artistController.getAllArtists);

artistRouter.get('/:id', artistController.getSingleArtist);

artistRouter.put('/:id', artistController.overwriteArtist);

artistRouter.patch('/:id', artistController.updateArtist);

artistRouter.delete('/:id', artistController.deleteArtist);

module.exports = artistRouter;