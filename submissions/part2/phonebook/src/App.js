import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import phonebookService from './services/phonebook'


const App = () => {
  const [persons, setPersons] = useState([])
  
  const allnames = persons.map(p => p.name)
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('') 
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    phonebookService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)})
    }, [])
  

  const addPerson = (event) => {
    event.preventDefault()
    if (allnames.includes(newName)) {
      alert(`${newName} is already in the phonebook.`)
    } 

    else {
      const personObject = {
        name: newName, number: newNum
      }

      phonebookService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNum('')
      })
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