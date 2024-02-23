import express  from "express";
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from "../controller/notesController.js";

const routes= express.Router()

routes.route('/').get(getNotes).post(createNote)
routes.route('/:id').get(getNoteById).put(updateNote).delete(deleteNote)

export default routes