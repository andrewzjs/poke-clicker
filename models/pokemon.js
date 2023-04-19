const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moveSchema = new Schema({
    move: String,
    power: Number,
    accuracy: Number,
    moveType:  String,

})

const pokemonSchema = new Schema({
    name: {
        type: String
    },
    pokemonType: {
        type: String
    }, 
    dateCaught: {
        type: Date,
        default: Date.now
    },
    isShiny: {
        type: Boolean,
        default: false
    },
    ability: {
        type: String
    },
    moves: [moveSchema],
    user: {type: Schema.Types.ObjectId, ref: "User"}
}, {
    timestamps: true,
})

module.exports = mongoose.model('Pokemon', pokemonSchema)