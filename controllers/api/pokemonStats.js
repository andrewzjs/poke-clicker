const User = require('../../models/user')
const Pokemon = require('../../models/pokemon')
const PokemonStats = require('../../models/stat')

module.exports = {
    index,
    create,
}

async function create(req, res) {
    try {
        const newPokemonStats = req.body.newPokemonStats
        newPokemonStats.pokemon = req.body.pokemonId
        const savePokemonStats = await PokemonStats.create(newPokemonStats)
        res.json(savePokemonStats)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function index(req, res){
    try {
        const pStats = await PokemonStats.find({pokemon: req.params.pokemonId})
        res.json(pStats.reverse())
    } catch (err) {
        res.status(400).json(err)
    }
}
