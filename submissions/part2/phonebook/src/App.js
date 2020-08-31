import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const allnames = persons.map(p => p.name)
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('') 

  const addPerson = (event) => {

    event.preventDefault()
    if (allnames.includes(newName)) {
      alert(`${newName} is already in the phonebook.`)
    } 

    else {
      const personobject = {
        name: newName, number: newNum
      }
      setPersons(persons.concat(personobject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>number: <input
        value={newNum}
        onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(p => <li key={p.name}><strong>{p.name}</strong> {p.number}</li>)}</div>
    </div>
  )
}

export default App