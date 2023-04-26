const User = require('../../models/user')
const Pokemon = require('../../models/pokemon')
const PokemonStats = require('../../models/stat')

module.exports = {
    create,
    show, 
    index,
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

async function show(req, res){
    try {
        const pStats = await PokemonStats.findOne({pokemon: req.params.id})
        res.json(pStats)
    } catch (err) {
        res.status(400).json(err)
    }
}


async function index(req, res){
    try {
        const pStats = await PokemonStats.find({pokemon: req.params.id})
        res.json(pStats)
    } catch (err) {
        res.status(400).json(err)
    }
}
