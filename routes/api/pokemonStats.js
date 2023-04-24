const express = require ('express')
const router = express.Router();
const pokemonStatsCtrl = require('../../controllers/api/pokemonStats')

// route: api/pokemonStats/create
router.post('/create', pokemonStatsCtrl.create)


module.exports = router