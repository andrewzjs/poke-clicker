const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

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
    ability: {
        type: String
    },
    dateCaught: {
        type: Date
    }
}, {
    timestamps: true,
})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true,
    },
    pokedex: [pokemonSchema]
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})

module.exports = mongoose.model('User', userSchema)