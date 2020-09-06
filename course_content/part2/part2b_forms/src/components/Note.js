import React from 'react'

const Note = ({ note }) => 
<li className='note'>
    {note.content}
</li>

export default Note