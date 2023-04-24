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
    sprite1: {
        type: String
    },
    sprite2: {
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
    gender: {
        type: String,
        default: "male"
    },
    moves: [moveSchema],
    user: { type: Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Pokemon', pokemonSchema)