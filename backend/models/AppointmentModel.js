import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const AppointmentSchema = new Schema({
    date: {    
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    tooth: {
        type: Number,
        required: true
    },
    isHealth: {
        type: Boolean,
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    diagnosis: {
        type: Schema.Types.ObjectId,
        ref: 'Diagnosis'
    }
})

export const AppointmentModel = new model('Appointment', AppointmentSchema)