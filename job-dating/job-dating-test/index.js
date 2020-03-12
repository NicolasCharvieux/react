/**
 * Fichier principal Application NodeJS
 */

//! Appel de la bibliothèque HTTP.
const server = require('http');

let name = 'Han';

//! Création du serveur NodeJS.
server.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end(
        `<h1>${name} shot first !!!</h1>`
    );
}).listen(3000);

//! Réécriture en version ES6. (méthode utilisée dans React, NodeJS, ...).
// server.createServer(
//     (req, res) => {

//     }
// ).listen(8080);