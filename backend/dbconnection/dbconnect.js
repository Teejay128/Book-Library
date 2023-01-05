const mongoose = require('mongoose')
require('dotenv').config()

const MONGOOSE_URL = process.env.MONGOOSE_URL

const dbConnect = () => {
    mongoose.connect(MONGOOSE_URL)
    const db = mongoose.connection
    db.on('connected', () => {
        console.log('connected to mongoDb')
    })

    db.on('error', (error) => {
        console.log('error connecting to mongoDb', error)
    })
}

module.exports = dbConnect


