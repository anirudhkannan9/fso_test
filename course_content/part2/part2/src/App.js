import React, { useState, useEffect } from 'react';
import Note from './components/Note.js'
import axios from 'axios';
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('newnote')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  
const toggleImportanceOf = id => {
  const note = notes.find(n => n.id === id)
  const changedNote = {...note, important: !note.important}

  noteService
  .update(id, changedNote).then(returnedNote => {
    setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
  .catch(error => {
    alert(
      `the note '${note.content}' was already deleted from server`
    )
    setNotes(notes.filter(n => n.id !== id))
  })

  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })

  }
  
  const handleChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)}

  const notesToShow = showAll
    ? notes
    : notes.filter(n => n.important)

    

  return (
    <><h1>Notes</h1>
    <button onClick={() => setShowAll(!showAll)}>
      show {showAll ? 'important' : 'all'}
    </button>
      <ul>
        {notesToShow.map((note, i) => 
        <Note key={i} note={note}
        toggleImportance={() => toggleImportanceOf(note.id)}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange}/>
        <button type="submit">save</button>
      </form> </>)}

export default App