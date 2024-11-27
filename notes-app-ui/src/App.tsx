import React, { useState } from "react";
import "./App.css";

type Note = {
  id: number;
  title: string;
  content: string;
}

const App = () => {
  const [notes, setNotes] = useState
  <Note[]
  >([
    {
      id: 1,
      title: "Note 1",
      content: "I",
    },
    {
      id: 2,
      title: "Note 2",
      content: "want",
    },
    {
      id: 3,
      title: "Note 3",
      content: "to",
    },
    {
      id: 4,
      title: "Note 4",
      content: "thank",
    },
    {
      id: 5,
      title: "Note 5",
      content: "me",
    },
    {
      id: 6,
      title: "Note 6",
      content: "for",
    },
    {
      id: 7,
      title: "Note 7",
      content: "believing",
    },
    {
      id: 8,
      title: "Note 8",
      content: "in",
    },
    {
      id: 9,
      title: "Note 9",
      content: "me.",
    },
    {
      id: 10,
      title: "Note 10",
      content: "That is all!",
    },
    ]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [selectedNote, setSelectedNote] =
      useState<Note | null>(null);

    const handleNoteClick = (note:Note) => {
      setSelectedNote(note);
      setTitle(note.title);
      setContent(note.content);
    }

    const handleAddNote = (
      event: React.FormEvent
    ) => {
      event.preventDefault();


      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const newNote: Note = {
        id: notes.length + 1,
        title: title,
        content: content,
      }

      setNotes([newNote, ...notes]);
      setTitle("");
      setContent("");
    };

    const handleUpdateNote = (
      event: React.FormEvent
    ) => {
      event.preventDefault();

      if(!selectedNote) {
        return;
      }

      const updatedNote: Note = {
        id: selectedNote.id,
        title: title,
        content: content,
      }

      const updatedNotesList = notes.map((note)=>
      note.id === selectedNote.id
      ? updatedNote
      : note
      )

      setNotes(updatedNotesList)
      setTitle("")
      setContent("")
      setSelectedNote(null);
    };

    const handleCancel = () => {
      setTitle("")
      setContent("")
      setSelectedNote(null);
    }

  return (
      <div className="app-container">
      <form className="note-form"
            onSubmit={(event) =>
              selectedNote
              ? handleUpdateNote(event)
              : handleAddNote(event)
            }
      >

      <input
        value={title}
        onChange={(event) =>
        setTitle(event.target.value)
        }
        placeholder="Title"
        required
        ></input>
        <textarea
        value={content}
        onChange={(event) =>
          setContent(event.target.value)
        }
        placeholder="Content"
        rows={10}
        required
        ></textarea>

        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button onClick={handleCancel}>
              Cancel
            </button>
          </div>
          ) : (
        <button type="submit">Add Note</button>
          )}
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item"
          onClick={()=> handleNoteClick(note)}
          >
            <div className="notes-header">
              <button>x</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
      </div>
    </div>
  );

};
export default App;
