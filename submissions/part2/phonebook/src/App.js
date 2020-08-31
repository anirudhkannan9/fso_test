import React, { useState } from 'react'
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'
import SearchBar from './components/SearchBar'


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
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }


  const updateSearch = (event) => {
    setSearch(event.target.value)
  }
  
  const filteredPersons = persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      Search: <SearchBar
      search={search}
      updateSearch={updateSearch}
      />

      <h2>add a new</h2>
      <AddPersonForm addPerson={addPerson} 
      newName={newName}
      handleNameChange={handleNameChange}
      newNum={newNum}
      handleNumChange={handleNumChange}/>

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App