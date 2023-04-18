const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

mongoose.connection.on('connected', function() {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})