import React from 'react'
import Course from './Course'

const Courses = ({courses}) => courses.map(c => <Course key={c.id} course={c}/>)

export default Courses


