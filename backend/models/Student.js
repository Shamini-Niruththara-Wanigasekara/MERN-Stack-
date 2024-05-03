import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
    name: { type: String, required: true },
    image: String,
    age: Number,
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

export default model('Student', studentSchema);
