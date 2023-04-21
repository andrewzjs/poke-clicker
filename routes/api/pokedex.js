const express = require ('express')
const router = express.Router();
const pokedexCtrl = require('../../controllers/api/pokedex')

// route: api/pokedex
router.get('/', pokedexCtrl.index)
// route: api/pokedex/create
router.post('/create', pokedexCtrl.create)

module.exports = router