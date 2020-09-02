import React from 'react'

const FullData = ({ fc, ac}) => {
    
    ac = ac.filter(c => c.name===fc[0])
    ac = ac[0]
    
    if (ac !== undefined) {
        var defined = true
    }

    const renderName = (props) => {if (defined) {return props.name}}
    const renderCap = (props) => {if (defined) {return props.capital}}
    const renderPop = (props) => {if (defined) {return props.population}}
    const renderLang = (props) => {if (defined) {
    return props.languages.map(l => <li key={l.name}>{l.name}</li>)}
}
    const renderImg = (props) => {if (defined) {
        var flagurl = props.flag
    return <img src={flagurl} style={{ width: 100}} alt={'flag of'+props.name} />
    }
}

    console.log('all countries after filtering', ac)
    return (<>
    <h2>{renderName(ac)}</h2>
        <div>capital: {renderCap(ac)}</div>
        <div>population: {renderPop(ac)}</div>
    <br></br>
    <h3>Languages</h3>
    <div>{renderLang(ac)}</div>
    <br></br>
    <div>{renderImg(ac)}</div>
        </>
    )
}

export default FullData