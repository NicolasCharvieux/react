/**
 * Job-dating application main file
 */


// Declaration of express to create an APP
const express = require("express")
const app = express()
const connectDb = require("./src/db/db.connect")

const port = 7500

const parser = require("body-parser")
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.listen(port, () => {
    console.log(`NodeJS API listening on port: ${port}`)
        //todo   ou alors -> console.log('NodeJS API listening on port: ' + PORT)

    connectDb()
        .then(() => {
            console.log("Successfuly connected to MongoDB!")
        })
        .catch((err) => {
            console.log(`Oooops! Something went wrong... ${err}`)
        })
})

app.get('/', (req, res) => {
    res.send('Han shot first!!!')
})

const crud = require('./src/api/api.crud')

//! USERS
app.post("/api/create", crud.create)
app.get("/api/getall", crud.getAll)
app.get("/api/getone/:id", crud.getOne)
app.put("/api/update/:id", crud.update)
app.delete("/api/delete/:id", crud.delete)

//! MEETING
app.get("/api/getallm", crud.getAllMeeting)
app.get('/api/getonem/:id', crud.getOneMeeting)
app.put("/api/updatem/:id", crud.updateMeeting)
app.delete("/api/deletem/:id", crud.deleteMeeting)