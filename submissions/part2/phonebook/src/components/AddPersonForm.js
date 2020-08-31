import React from 'react'

const AddPersonForm = (props) => {
    const addPerson = props.addPerson
    const newName = props.newName
    const handleNameChange = props.handleNameChange
    const newNum = props.newNum
    const handleNumChange = props.handleNumChange

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input
                value={newName}
                onChange={handleNameChange}
                />
            </div>
            <div>number: <input
                value={newNum}
                onChange={handleNumChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>

    )
}

export default AddPersonForm



   
