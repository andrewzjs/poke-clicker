const mongoose = require('mongoose')
const Schema = mongoose.Schema

const statSchema = new Schema({
    level: {
        type: Number,
        default: 1
    },
    hp: {
        type: Number,
        default: 1
    },
    attack: {
        type: Number,
        default: 1
    },
    defense: {
        type: Number,
        default: 1
    },
    specialAttack: {
        type: Number,
        default: 1
    },
    specialDefense: {
        type: Number,
        default: 1
    },
    speed: {
        type: Number,
        default: 1
    },
    pokemon: { type: Schema.Types.ObjectId, ref: 'Pokemon' }
}, {
    timestamps: true
})

module.exports = mongoose.model('Stat', statSchema)