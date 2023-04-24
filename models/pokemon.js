const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moveSchema = new Schema({
    move: String,
    power: { 
        type: Number,
        default: 0
    },
    accuracy: { 
        type: Number,
        default: 0
    },
    moveType:  String,
    pp: {
        type: Number,
        default: 10
    },
    damageClass: {
        type: String,
        default: "Physical"
    }
})

const pokemonSchema = new Schema({
    name: {
        type: String
    },
    sprite: {
        type: String
    },
    pokemonType: {
        type: [String]
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
    height: {
        type: Number,
        default: 1
    },
    weight: {
        type: Number,
        default: 1
    },
    heldItem: {
        type: String,
        default: "oran berry"
    },
    moves: [moveSchema],
    user: { type: Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Pokemon', pokemonSchema)