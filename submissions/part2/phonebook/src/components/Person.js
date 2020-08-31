import React from 'react'

const Person = ({p}) => {
    const name = p.name
    const num = p.number
    return <li><strong>{name}</strong> {num}</li>
}

export default Person