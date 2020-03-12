/**
 * Fichier de connexion à la base de données
 */

//! Appel du module de configuration d'accès à la bdd.
const config = require('./db.config')

//! Appel du connecteur pour MongoDB.
const mongoose = require('mongoose')

//! A définir plus tard.
mongoose.Promise = global.Promise;

//! Connexion à la bas MongoDb.
const connectDb = () => {
    return mongoose.connect(config.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDb;