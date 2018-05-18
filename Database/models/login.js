const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    email: 
    {
        type: String,
    },
    password: 
    {
        type:String,
    }
});

const login = mongoose.model('login', LoginSchema);
module.exports = login; 