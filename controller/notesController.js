import Notes from "../models/notesModel.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find();

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (note) {
      res.status(200).json(note);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {

    const { title, description, dateTime } = req.body;
    const newNote = new Notes({
      title,
      dateTime:  Date(dateTime),
      description,
    });
    const note = await newNote.save();
    res.status(200).json(note);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateNote = async(req, res)=>{
    try {
        const { title, date, description } = req.body;
        const note = await Notes.findById(req.params.id);
        if (note) {
            note.title=title;
            note.date= new  Date(date),
            note.description= description

            const updatedNote = await note.save()
            res.status(200).json(updatedNote);

        }else{
            res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

export const  deleteNote = async (req, res) => {
    try {
        const note = await Notes.findByIdAndDelete(req.params.id);
        if (note) {
            res.status(404).json({ message: "Deleted Successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
