/**
 * gestion des operations crud
 */

const usersModel = require('../db/users')
const meetingModel = require('../db/meeting')

//! Création
exports.create = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: "No datas sent to record in database"
        })
    }

    let model = req.body.model
    if (model && model === "users") {

        //todo     Autre méthode pour users
        await usersModel.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                pro: req.body.pro
            })
            .then(() => {
                res.json({
                    message: `Success : Users with name ${req.body.name} added!`
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: `Error : a problem occured... ${err}`
                })
            })
    } else if (model && model === "meeting") {
        await meetingModel.create({
                time: req.body.time,
                place: req.body.place,
                pstud: req.body.pstud,
                ppro: req.body.ppro
            })
            .then(() => {
                res.json({
                    message: `Success : Meeting with time ${req.body.time} added!`
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: `Error : a problem occured... ${err}`
                })
            })
    } else {
        return res.status(400).json({
            message: "Wrong model parameter specified or missing model parameter"
        })
    }





    ///todo pour Karim .....///////////////////////////////////////////////////////////////////////

    // await rec.save()
    //     .then(record => {
    //         res.send({
    //             message: `Success : new user with name ${req} added!`
    //         })
    //     })
    //     .catch((err) => {
    //         if (err.code === 11000) {
    //             res.status(500).json({
    //                 message: "Error : trying to create duplicate record : " + req.body.email
    //             })

    //         } else {

    //             res.status(500).json({
    //                 message: err.message || "Error when creating new record"
    //             })
    //         }
    //     })

    ///todo pour Karim .....///////////////////////////////////////////////////////////////////////
}






//! GetAll Users
exports.getAll = async(req, res) => {
    await usersModel.find()
        .exec()
        .then(record => {
            if (!record) {
                return res.status(204).send(`No record found...`)
            }
            res.send(record)
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || 'An error occured while executing request'
            })

        })
}

//! GetAll Meeting
exports.getAllMeeting = async(req, res) => {
    await meetingModel.find()
        .exec()
        .then(record => {
            if (!record) {
                return res.status(204).send(`No record found...`)
            }
            res.send(record)
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || 'An error occured while executing request'
            })

        })
}

//! GetById Users
exports.getOne = async(req, res) => {
    if (!req.params.id) {
        return res.status(400).json({
            message: "No ID specified..."
        })
    }

    await usersModel.findById(req.params.id)
        .then((recGetOne) => {
            if (!recGetOne) {
                return res.status(404).json({
                    message: "Record not found with ID" + req.body.id
                })
            }
            res.json(recGetOne)
        })
        .catch((err) => {
            if (err.kind === 'ObjectID') {
                return res.status(404).json({
                    message: err.message || "Record not found with ID" + req.body.id
                })
            }

            return res.status(500).json({
                message: err.message || "Error retreiving record with ID" + req.body.id
            })
        })
}

// //! getById Meeting
exports.getOneMeeting = async(req, res) => {
    // console.log(req.params.id)
    if (!req.params.id) {
        return res.status(400).json({
            message: "No ID specified..."
        })
    }
    await meetingModel.findById(req.params.id)
        .populate('pstud ppro')
        .then((recGetO) => {
            if (!recGetO) {
                return res.status(404).json({
                    message: "Record not found with ID" + req.body.id
                })
            }
            res.json(recGetO)
        })
        .catch((err) => {
            if (err.kind === 'ObjectID') {
                return res.status(404).json({
                    message: err.message || "Record not found with ID" + req.body.id
                })
            }
            return res.status(500).json({
                message: err.message || "Error retreiving record with ID" + req.body.id
            })
        })
}

//! update Users
exports.update = async(req, res) => {
    if (!req.params.id) {
        return res.status(400).json({
            message: "No ID specified..."
        })
    }

    usersModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            pro: req.body.pro
        })
        .then((recupd) => {
            if (!recupd) {
                return res.status(404).json({
                    message: "Record not found with ID" + req.body.id
                })
            }
            res.json(recupd)
        })
        .catch((err) => {
            if (err.kind === 'ObjectID') {
                return res.status(404).json({
                    message: err.message || "Record not found with ID" + req.body.id
                })
            }

            return res.status(500).json({
                message: err.message || "Error updating rcord with ID" + req.body.id
            })
        })

}

//! update Meeting
exports.updateMeeting = async(req, res) => {
    if (!req.params.id) {
        return res.status(400).json({
            message: "No ID specified..."
        })
    }

    meetingModel.findByIdAndUpdate(req.params.id, {
            time: req.body.time,
            place: req.body.place,
            participants: req.body.participants
        })
        .then((recupd) => {
            if (!recupd) {
                return res.status(404).json({
                    message: "Record not found with ID" + req.body.id
                })
            }
            res.json(recupd)
        })
        .catch((err) => {
            if (err.kind === 'ObjectID') {
                return res.status(404).json({
                    message: err.message || "Record not found with ID" + req.body.id
                })
            }

            return res.status(500).json({
                message: err.message || "Error updating rcord with ID" + req.body.id
            })
        })

}

//! delete Users
exports.delete = async(req, res) => {
    if (!req.params.id) {
        return res.status(400).json({
            message: "No ID specified..."
        })
    }

    usersModel.findByIdAndDelete(req.params.id)
        .then((recupd) => {
            if (!recupd) {
                return res.status(404).json({
                    message: "Record not found with ID" + req.body.id
                })
            }
            res.json(recupd)
        })
        .catch((err) => {
            if (err.kind === 'ObjectID') {
                return res.status(404).json({
                    message: err.message || "Record not found with ID" + req.body.id
                })
            }

            return res.status(500).json({
                message: err.message || "Error delete rcord with ID" + req.body.id
            })
        })
}

//! delete Meeting
exports.deleteMeeting = async(req, res) => {
    if (!req.params.id) {
        return res.status(400).json({
            message: "No ID specified..."
        })
    }

    meetingModel.findByIdAndDelete(req.params.id)
        .then((recupd) => {
            if (!recupd) {
                return res.status(404).json({
                    message: "Record not found with ID" + req.body.id
                })
            }
            res.json(recupd)
        })
        .catch((err) => {
            if (err.kind === 'ObjectID') {
                return res.status(404).json({
                    message: err.message || "Record not found with ID" + req.body.id
                })
            }

            return res.status(500).json({
                message: err.message || "Error delete rcord with ID" + req.body.id
            })
        })
}

// const usersSchema = Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     age: Number,
//     ppro: [{ type: Schema.Types.ObjectId, ref: 'users' }]
// });

// const meetingSchema = Schema({
//     author: { type: Schema.Types.ObjectId, ref: 'users' },
//     title: String,
//     pstud: [{ type: Schema.Types.ObjectId, ref: 'users' }]
// });

// const meeting = mongoose.model('meeting', meetingSchema);
// const users = mongoose.model('users', usersSchema);