import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'
import SearchBar from './components/SearchBar'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('') 
  const [ search, setSearch ] = useState('')
  const [successMessage, setsuccessMessage] = useState(null)
  const [ failureMessage, setfailureMessage ] = useState(null)

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
        setsuccessMessage(`${newName} added to phonebook.`)
        setTimeout(() => {setsuccessMessage(null)}, 5000)
      })
      .catch(error => {
        console.log(error.response.data.error)
        setfailureMessage(error.response.data.error)
        setTimeout(() => { setfailureMessage(null)}, 5000 )
      })

      // setsuccessMessage(`${newName} added to phonebook.`)
      // setTimeout(() => {setsuccessMessage(null)}, 5000)
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
        .then(r => {setPersons(r)}
          )
        )
      .catch(error => {
        setfailureMessage(`The contact "${person.name}" has already been removed from server.`)
        setTimeout(() => {setfailureMessage(null)}, 5000)
      })
      }
      setNewNum('')
    }

  const updateNum = () => {
  var update = persons.filter(p => p.name===newName)[0]
  update = {...update, number: newNum}

  if (newNum.length < 8) {
    //console.log(error.response.data.error)
    //setfailureMessage(error.response.data.error)
    setfailureMessage('The new number must be at least 8 digits long.')
    setTimeout(() => { setfailureMessage(null)}, 5000)

  } else {
  phonebookService
  .updatePerson(update)
  .then(() => {phonebookService
    .getAll()
    .then(response => {
      console.log(response)
      setPersons(response)
      setNewName('')
      setNewNum('')
      setsuccessMessage(`${update.name} updated`)
      setTimeout(() => { setsuccessMessage(null)}, 5000)
    })
  }
  )
  
}
  }

  //SETTING OF STATE AFTER UPDATING THE LIST OF PERSONS
  //setPersons(response)
    // setNewName('')
    // setNewNum('')
    
  
  


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type='success' message={successMessage}/>
      <Notification type='fail' message={failureMessage}/>
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