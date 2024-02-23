import express from "express";
import mongoose from "mongoose";
import notesRoutes from './routes/notesRoutes.js';
import dotenv from 'dotenv';


dotenv.config()
const app = express();
app.use(express.json());
const port = 5555;

app.use('/api/notes', notesRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("Connected to database");
  });
