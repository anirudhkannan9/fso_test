import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import phonebookService from './services/phonebook'


const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('') 
  const [ search, setSearch ] = useState('')

  const allnames = persons.map(p => p.name)
  const filteredPersons = persons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    phonebookService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)})
    }, [])
  

  const addPerson = (event) => {
    event.preventDefault()
    if (allnames.includes(newName)) {

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        updateNum()}

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

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumChange = (event) => setNewNum(event.target.value)
  
  const updateSearch = (event) => setSearch(event.target.value)

  const handleDelete = (person) => {

    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      phonebookService
      .deletePerson(person)
      .then(phonebookService
        .getAll()
        .then(r => {
          setPersons(r)
        }
          )
        )
      }
      setNewNum('')
    }

  const updateNum = () => {
    var update = persons.filter(p => p.name===newName)[0]
    update = {...update, number: newNum}

    phonebookService
    .updatePerson(update)
    .then(phonebookService
      .getAll()
      .then(r => {
        setNewName('')
        setNewNum('')
        setPersons(r)
        
      }
        )
      )
    
    // const newName = newname
    // axios
    // .get('http://localhost:3001/persons')
    // .then(r => {return r.data
    // })

    // console.log('outside the promise chain;', r.data)
    
  }
      

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
      handleNumChange={handleNumChange}
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App