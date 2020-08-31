import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const allnames = persons.map(p => p.name)
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('') 
  const [ search, setSearch ] = useState('')

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
      setNewNum('')
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


  const updateSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
  
  const filteredPersons = persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <input
      value={search}
      onChange={updateSearch}
      />

      <h2>add a new</h2>
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
      <div>{filteredPersons.map(p => <li key={p.name}><strong>{p.name}</strong> {p.number}</li>)}</div>
    </div>
  )
}

export default App