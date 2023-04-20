const User = require('../../models/user')
const Pokemon = require('../../models/pokemon')

module.exports = {
    index,
    create,
}

async function create(req, res) {
    try {
        const newPokemon = req.body.newPokemon
        newPokemon.user = req.user._id
        const savePokemon = await Pokemon.create(newPokemon)
        res.json(savePokemon)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function index(req, res){
    try {
        const p = await Pokemon.find({user: req.user._id})
        console.log(p)
        res.json(p)
    } catch (error) {
        res.status(400).json(err)
    }
}