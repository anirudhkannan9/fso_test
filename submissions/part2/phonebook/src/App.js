import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const allnames = persons.map(p => p.name)
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (allnames.includes(newName)) {
      alert(`${newName} is already in the phonebook.`)
    } 

    else {
      const personobject = {
        name: newName,
      }
  
      setPersons(persons.concat(personobject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(p => <li key={p.name}>{p.name}</li>)}</div>
    </div>
  )
}

export default App