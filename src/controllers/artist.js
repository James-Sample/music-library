// exports.create = (req, res) => {
//     res.sendStatus(201);
// }
const db =require('../db/index')

exports.createArtist = async (req, res) => {
    const { name, genre } = req.body
    try {
      const { rows: [ artist ] } = await db.query('INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *', [name, genre])
      res.status(201).json(artist)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }

  exports.getAllArtists = async (_, res) => {
    try {
      const { rows } = await db.query('SELECT * FROM Artists')
      res.status(200).json(rows)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }

  exports.getSingleArtist = async (req, res) => {
    try {
        const { id } = req.params
        const { rows: [ artist ] } = await db.query('SELECT * FROM Artists WHERE id = $1', [id])
        
        if (!artist) {
            return res.status(404).json({ message: `artist ${id} does not exist` })
        }
        res.status(200).json(artist)
    } catch (err) {
        res.status(500).json(err.message)
    }
  }

  exports.overwriteArtist = async (req, res) => {
    const { name, genre } = req.body
    const { id } = req.params
    try {
      const { rows: [ artist ] } = await db.query('UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *', [name, genre, id])
      
      if (!artist) {
        res.status(404).json({result: "no such artist"})
      }
      res.status(200).json(artist)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }