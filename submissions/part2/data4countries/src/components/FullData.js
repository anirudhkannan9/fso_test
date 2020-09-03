import React, { useState } from 'react'
import axios from 'axios'

const FullData = ({ fc, ac}) => {
    const [ weather, setWeather ] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    ac = ac.filter(c => c.name===fc[0])
    ac = ac[0]
    
    if (ac !== undefined) var defined = true

    const renderName = (props) => {if (defined) return props.name}
    const renderCap = (props) => {if (defined) return props.capital}
    const renderPop = (props) => {if (defined) return props.population}
    const renderLang = (props) => {if (defined) {
    return props.languages.map(l => <li key={l.name}>{l.name}</li>)}
}
    const renderImg = (props) => {if (defined) {
    return <img 
    src={props.flag} 
    style={{ width: 100}} 
    alt={'flag of'+props.name} />
}
}

    const renderWeather = (props) => { if ((defined) && (weather.length > 0)) {
        return (<>
        <h3>Weather</h3>
        <div><strong>temperature: </strong> {weather[0]['temperature']} ℃</div>
        <div><img 
        src={weather[0]['weather_icons'][0]}
        style={{ width: 100 }}
        alt={`img icon of ${weather[0]['weather_descriptions'][0]} weather conditions`}
        />
        </div>
        <div><strong>wind: </strong> {weather[0]['wind_speed']} mph direction {weather[0]['wind_dir']} </div>
        </>)
    } 

    else if ((defined) && (weather.length === 0)) {
        const params = {
            access_key : api_key,
            query: props.capital
        }

        axios.get('http://api.weatherstack.com/current', {params})
        .then(response => {setWeather(weather.concat(response.data.current))})

        return (<div>rendering weather...</div>)
        
    }

}


    return (<>
    <h2>{renderName(ac)}</h2>
        <div>capital: {renderCap(ac)}</div>
        <div>population: {renderPop(ac)}</div>
    <br></br><h3>Languages</h3>
    <div>{renderLang(ac)}</div>
    <br></br><div>{renderImg(ac)}</div>
    <br></br><div>{renderWeather(ac)}</div></>)
}

export default FullData