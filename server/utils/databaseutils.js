/**
 * Created by Bogdan on 04/26/16.
 */
import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Note';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(id){
    return Note.find();
}

export function createNote(data){
    const note = new Note({
        title: data.title,
        text: data.title,
        color: data.color,
        link: data.link,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id){
    return Note.findById(id).remove();
}