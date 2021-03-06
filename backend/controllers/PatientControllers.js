import mongoose from 'mongoose';
import { patientModel } from '../models/PatientModel.js';

const isValidObject = mongoose.Types.ObjectId.isValid;

class PatientControllers {
    async index(_, res) {
        try {
            const patients = await patientModel.find({}).exec();
            res.json({
                status: "success",
                data: patients
            })
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

    async show(req, res) {
        try {
            const patientId = req.params.id
            if(!isValidObject(patientId)) {
                res.status(400).send();
            }
            const patient = await patientModel.findOne({ _id: patientId}).exec()
            res.status(200).json({
                status: 'success',
                data: patient
            })
        } catch(err) {

        }
    }

    async create(req, res) {
        try {
            const patient = await patientModel.create(req.body);
            res.status(201).json({
                status: 'success',
                data: patient
            })
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

export  const PatientCtrl = new PatientControllers();