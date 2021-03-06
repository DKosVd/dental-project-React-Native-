import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/dental',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))


export {db, mongoose};