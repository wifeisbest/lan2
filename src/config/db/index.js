const mongoose = require('mongoose');

async function connect (){

    try {
        await mongoose.connect('mongodb+srv://duongnguyen:Q-4EArJqJXxWSeR@cluster0.3e920.mongodb.net/f8_edu?retryWrites=true&w=majority', {
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
