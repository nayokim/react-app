import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
   return (
     <h1>{props.name}</h1>
   )
}

const Part = ({part_name, number_of_exercises}) => (
  <p> {part_name} {number_of_exercises}</p>
)

const Content= (props) =>{
  return(
  <div>
    <Part part = {props.part} name={props.name} exercises={props.exercises} />
    <Part part={props.part} name={props.name} exercises={props.exercises} />
    <Part part={props.part} name={props.name} exercises={props.exercises} />
  </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
]

  return (
    <div>
      <Header name = {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))