import React from 'react'
import Part from './Part'

const Course = ({course}) => {
    return (
    <><h2>{course.name}</h2>
    <ol>{course.parts.map(p => <Part key={p.name} part={p}/>)}</ol>
    <strong>total of {course.parts.reduce((s, p) => s + p.exercises, 0)} exercises</strong>
    </>)}

export default Course


