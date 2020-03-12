/**
 *  modelisation de la table mytable users
 * dans la bdd mongodb
 */

const mongoose = require('mongoose')

//! schema de construction de la table mytable
const usersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    pro: { type: Boolean }
})

//! creation de la table dans la bdd
const users = mongoose.model('users', usersSchema)

//! export du module
module.exports = users;