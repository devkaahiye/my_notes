import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    dateTime:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    },

})

const Notes = mongoose.model('notes', notesSchema)
export default Notes;