import express from 'express';
import  './core/db.js'
import { PatientCtrl } from './controllers/PatientControllers.js'
import { DiagnosisCtrl } from './controllers/DiagnosisControllers.js'
import { AppointmentCtrl } from './controllers/AppointmentController.js';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())

app.get('/patients', PatientCtrl.index);
app.get('/patients/:id', PatientCtrl.show);
app.post('/patients', PatientCtrl.create);

app.get('/appointment', AppointmentCtrl.index)
app.get('/appointment/:idUser', AppointmentCtrl.appointmentByIdUser)
app.post('/appointment', AppointmentCtrl.create)

app.get('/diagnosis', DiagnosisCtrl.index);
app.post('/diagnosis', DiagnosisCtrl.create);

app.listen(3001, () => {
    console.log('Сервер на порту: ', 3001)
})