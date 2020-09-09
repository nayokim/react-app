import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
   return (
     <h1>{props.name}</h1>
   )
}

const Part = ({name, exercises}) => (
  <p> {name} {exercises}</p>
)

const Content= ({parts}) =>{
  return(
    parts.map(part => (
      <Part key = {part.name} name = {part.name} exercises = {part.exercises}/>
    )
  )
)}

const add = (a,b) => a + b 
const Total = ({parts}) => (
    <p>
      Number of Exercises: {parts.map(part => part.exercises).reduce(add)}
    </p>
)


const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts :[
  {
    name:'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]}

  return (
    <div>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))