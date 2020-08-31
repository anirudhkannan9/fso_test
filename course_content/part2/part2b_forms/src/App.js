import React, { useState } from 'react';
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('newnote')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1}

    setNotes(notes.concat(noteObject))
    setNewNote('')
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
        {notesToShow.map(n => <Note key={n.id} note={n}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange}/>
        <button type="submit">save</button>
      </form> </>)}

export default App