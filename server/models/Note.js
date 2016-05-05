/**
 * Created by Bogdan on 04/26/16.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title      : { type: String },
    text       : { type: String, required: true},
    color      : { type: String },
    link       : { type: String },
    createdAt  : { type: Date }
});

mongoose.model('Note', NoteSchema);