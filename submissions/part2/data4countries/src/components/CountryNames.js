import React, { useState } from 'react'
import FullData from './FullData'

const CountryNames = ({fc, ac}) => {
    const [ fullCountry, setFullCountry ] = useState([])
    const [ showFull, setShowFull ] = useState(false)

   
    const changeState = ({c}) => {
        setFullCountry([c])
        setShowFull(true)
    }

    if (showFull) {
        return (<FullData fc={fullCountry} ac={ac}/>)
    }

    else {
        return (<>{fc.map(c => <>
            <li key={c}>{c}<button onClick={() => changeState({c})}>show {c}</button></li></>)}
            </>
            )
    }
}


export default CountryNames