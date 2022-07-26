const mongoose = require('mongoose');

const uniqueValidator = require ('mongoose-unique-validator')

//Creation du schéma
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique : true },
    password: { type: String, required: true },
    rôle: {type: Number, required : true}
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema);