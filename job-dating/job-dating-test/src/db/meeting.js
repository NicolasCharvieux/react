/**
 *  modelisation de la table mytable participant
 * dans la bdd mongodb
 */

const mongoose = require('mongoose')

//! schema de construction de la table mytable
const meetingSchema = new mongoose.Schema({
    time: { type: String, required: true },
    place: { type: String, required: true },
    // participants: { type: String, required: true },
    pstud: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    ppro: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }
})

//! creation de la table dans la bdd
const meeting = mongoose.model('meeting', meetingSchema)

//! export du module
module.exports = meeting