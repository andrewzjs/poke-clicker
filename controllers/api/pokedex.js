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
        const pokedexFromDatabase = await Pokedex.find({user: req.user._id})
        res.json(pokedexFromDatabase)
    } catch (err) {
        res.status(400).json(err)
    }
}