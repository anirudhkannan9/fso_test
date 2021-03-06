import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CountryNames from './components/CountryNames'
import FullData from './components/FullData'
import PromptSearch from './components/PromptSearch'

const App = () => {
  const [ countries, setCountries] = useState([])
  const [ allcountries, setAllCountries ] = useState([])
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(r => {
      setCountries(r.data)
      setAllCountries(r.data)
    })}
    ,[])
   
  const updateSearch = (event) => {setSearch(event.target.value)}

  // const displayFull = (event) => {
  //   //console.log(event.target.lastChild)
  //   filteredcountries = event.target.lastChild
  //   console.log(filteredcountries)
  //   decideRender(filteredcountries)
  // }

  var filteredcountries = countries.map(c => c.name).filter(c => c.toLowerCase().includes(search.toLowerCase()))

  const decideRender = () => {
    if (filteredcountries.length > 10) return <PromptSearch />

    else if (filteredcountries.length > 1 && filteredcountries.length <= 10) {
      return <CountryNames fc={filteredcountries} ac={allcountries}/>
    }

    else {
      console.log('checking before passing arguments to FullData:', allcountries)
      return <FullData fc={filteredcountries} ac={allcountries}/>
    }
  }  

  return (
    <>
    Find countries: <input
    value={search}
    onChange={updateSearch} 
    />
    <br/><div>
    {decideRender(filteredcountries)}
    </div></>  
  )
}


export default App;
