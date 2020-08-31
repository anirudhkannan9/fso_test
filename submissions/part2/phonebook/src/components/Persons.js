import React from 'react'
import Person from './Person'

const Persons = ({filteredPersons}) => {
    return (<div>
        {filteredPersons.map(p => <Person key={p.name} p={p}/>)}
    </div>)
}

export default Persons