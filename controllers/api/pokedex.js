const User = require('../../models/user')


module.exports = {
    index,
    create,
}

async function create(req, res) {
    try {
        const user = await User.findById(req.user._id)
        console.log('create controller')
        console.log(user)
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
        const latestEntries = pokedexFromDatabase.slice(-20).reverse(); 
        res.json(latestEntries)
    } catch (err) {
        res.status(400).json(err)
    }
}