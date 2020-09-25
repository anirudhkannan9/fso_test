import React, { useState, useEffect } from 'react';
import Note from './Note.js'
import '../index.css'
import noteService from '../services/notes'
import Notification from './Notification'

const Footer = () => {
  const footerStyle = {
    color: 'blue',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2020</em>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('newnote')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)


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
    setErrorMessage(
      `Note '${note.content}' was already removed from server`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
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
    <Notification message={errorMessage} />
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
      </form> 
      <Footer />
      </>)}

export default App