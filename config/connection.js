const mongoose = require('mongoose');

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGODB_URI) 
    console.log('MongoDB connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;