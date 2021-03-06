import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const PatientSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    sur_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    avatar: String
})

export const patientModel = model('Patient', PatientSchema);