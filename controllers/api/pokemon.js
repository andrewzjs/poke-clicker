const User = require('../../models/user')
const Pokemon = require('../../models/pokemon')
const PokemonStats = require('../../models/stat')

module.exports = {
    index,
    create,
    delete: deletePokemon,
    show,
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

async function show(req, res){
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.json(pokemon)
    } catch (err) {
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
    console.log("test")
    try {
        console.log(req.params.id)
        await PokemonStats.findOneAndDelete({pokemon: req.params.id })
        await Pokemon.findByIdAndDelete(req.params.id)
        const remainingPokemon = await Pokemon.find({user: req.user._id})
        res.json(remainingPokemon)
    } catch (err) {
        res.status(400).json(err)
    }
}