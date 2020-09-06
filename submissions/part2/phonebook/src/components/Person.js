import React from 'react'

const Person = ({p, handleDelete}) => {
    const name = p.name
    const num = p.number
    return <li><strong>{name}</strong> {num} <button onClick={handleDelete}>delete</button></li>
}

export default Person