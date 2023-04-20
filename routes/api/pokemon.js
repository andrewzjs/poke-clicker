const express = require ('express')
const router = express.Router();
const pokemonCtrl = require('../../controllers/api/pokemon')

// route: api/pokemon/create
router.post('/create', pokemonCtrl.create)
// route: api/pokemon
router.get('/', pokemonCtrl.index)

module.exports = router