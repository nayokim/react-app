import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
   return (
     <h1>{props.name}</h1>
   )
}

const Part = ({part_name, num_exercises}) => (
  <p> {part_name} {num_exercises}</p>
)

const Content= ({parts}) =>{
  return(
    parts.map(part => (
      <Part key = {part.name} part_name = {part.name} num_exercises = {part.exercises}/>
    )
  )
)}


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
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))