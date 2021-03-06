import { DiagnosisModel } from '../models/DiagnosisModel.js';




class DiagnosisControllers {
    async index(_, res) {
        try {
            const diagnosis = await DiagnosisModel.find({}).exec();
            res.json({
                status: "success",
                data: diagnosis
            })
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }

    async create(req, res) {
        try {
            const diagnos = await DiagnosisModel.create(req.body);
            res.status(201).json({
                status: 'success',
                data: diagnos
            })
        } catch(err) {
            res.status(500).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

export  const DiagnosisCtrl = new DiagnosisControllers();