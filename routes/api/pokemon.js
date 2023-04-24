const express = require ('express')
const router = express.Router();
const pokemonCtrl = require('../../controllers/api/pokemon')

// route: api/pokemon
router.get('/', pokemonCtrl.index)
// route: api/pokemon/:pokemonId
router.get('/:id', pokemonCtrl.show)
// route: api/pokemon/user/:userId
router.get('/user/:uid', pokemonCtrl.userShow)
// route: api/pokemon/create
router.post('/create', pokemonCtrl.create)
// route: api/pokemon/delete/:pokemonId
router.delete('/delete/:id', pokemonCtrl.delete)

module.exports = router