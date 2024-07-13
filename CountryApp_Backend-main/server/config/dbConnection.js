require('dotenv').config()
const mongoose = require('mongoose');
const dbToConnection = async () => {
try{
    await mongoose.connect('mongodb+srv://adithyasudev28:Omsairam@5369@cluster0.md3ebaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('db connected')
}catch(err){
    console.log(err.message)
}  
}
module.exports = {dbToConnection}