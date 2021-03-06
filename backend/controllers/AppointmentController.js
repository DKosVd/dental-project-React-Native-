import { AppointmentModel } from "../models/AppointmentModel.js";

class AppointmentController {
    async index(_, res) {
        try {
            const appointments = await AppointmentModel.aggregate([{
                $group: {
                    _id: '$date', data: {$push: {patient: '$patient', diagnosis:'$diagnosis', isHealth: '$isHealth', tooth: '$tooth', time: '$time'}}//Выбираем данные
                }},
                {$project: {title: '$_id', data:1, _id: 0 }} //Выбираем, что оставлять в результирующих данных
            ]);
            await AppointmentModel.populate(appointments, { path: 'data.patient', model: 'Patient'})
            res.json({
                status: 'success',
                data: await AppointmentModel.populate(appointments, { path: 'data.diagnosis', model: 'Diagnosis'})
            })
        } catch(err) {
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }

    async create(req, res) {
        try {
            const appointment = await AppointmentModel.create(req.body)
            res.status(201).json({
                status: 'success',
                data: appointment
            })
        } catch(err) {
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }

    async appointmentByIdUser(req, res) {
        try {
            const appointments = await AppointmentModel.find({'patient': req.params.idUser}, {patient: 0}).populate('diagnosis').exec()
            res.status(200).json({
                status: "success",
                data: appointments
            })
        } catch(err) {
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
    }
}

export  const AppointmentCtrl = new AppointmentController();