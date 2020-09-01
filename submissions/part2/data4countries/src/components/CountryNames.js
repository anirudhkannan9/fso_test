import React from 'react'

const CountryNames = ({fc}) => {

    console.log(fc)
    return (<>{fc.map(c => 
        <li key={c}>{c}</li>)}
        </>
        )
    }

export default CountryNames