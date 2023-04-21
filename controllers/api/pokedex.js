const User = require('../../models/user')


module.exports = {
    index,
    create,
}

async function create(req, res) {
    try {
        const user = await User.findById(req.user._id)
        user.pokedex.push(req.body.newPokedexEntry)
        console.log(req.body.newPokedexEntry)
        await user.save()
        res.json("")
    } catch(err) {
        res.status(400).json(err)
    }
}

async function index(req, res){
    try {
        const user = await User.findById(req.user._id)
        const pokedexFromDatabase = user.pokedex
        console.log("what!", pokedexFromDatabase[0])
        res.json(pokedexFromDatabase)
    } catch (err) {
        res.status(400).json(err)
    }
}