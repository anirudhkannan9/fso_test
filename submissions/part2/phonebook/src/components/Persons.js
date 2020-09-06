import React from 'react'
import Person from './Person'

const Persons = ({filteredPersons, handleDelete}) => {
    return (<div>
        {filteredPersons.map(p => <Person key={p.name} p={p} handleDelete={() => handleDelete(p)}/>)}
    </div>)
}

export default Persons