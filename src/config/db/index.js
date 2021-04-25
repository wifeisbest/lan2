const mongoose = require('mongoose');
const mongooseUri = 'mongodb+srv://duongnguyen:Q-4EArJqJXxWSeR@cluster0.3e920.mongodb.net/f8_edu?retryWrites=true&w=majority'
async function connect (){

    try {
        await mongoose.connect(
            mongooseUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connect success')            
    } catch (error) {
        console.log('Connect failed')
    }

}

module.exports = {connect};
