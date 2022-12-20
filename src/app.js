const express = require('express');
const artistRouter = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artists', artistRouter);

// app.get('/testing', (req, res) => {
//     res.status(200).json({ result: "got it"})
// })

// app.post('/test2', (req, res) => {
//     res.status(201).json({ result: "also got it"})
// })

// app.post('/artist', (req, res) => {
//      res.sendStatus(201);
//  })

module.exports = app;