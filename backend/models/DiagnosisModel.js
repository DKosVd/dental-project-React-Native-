import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const DiagnosisSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})

export const DiagnosisModel = model('Diagnosis', DiagnosisSchema);