const User = require('../../models/user')
const Pokemon = require('../../models/pokemon')
const PokemonStats = require('../../models/stat')

module.exports = {
    index,
    create,
    delete: deletePokemon,
    show: showPokemon
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

async function showPokemon(req, res) {
    try {
        const p = await Pokemon.find({user: req.user._id})
        const pStats = await PokemonStats.find({pokemon: req.pokemonId})
        console.log(p, pStats)
        res.json(p, pStats)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function index(req, res){
    try {
        const p = await Pokemon.find({user: req.user._id})
        res.json(p.reverse())
    } catch (err) {
        res.status(400).json(err)
    }
}

async function deletePokemon(req, res){
    try {
        const pokemonStats = PokemonStats.findOneAndDelete({pokemon: req.params.id })
        await Pokemon.findByIdAndDelete(req.params.id)
        const remainingPokemon = await Pokemon.find({user: req.user._id})
        res.json(remainingPokemon)
    } catch (err) {
        res.status(400).json(err)
    }
}