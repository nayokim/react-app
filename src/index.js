import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
   return (
     <h1>{props.name}</h1>
   )
}

const Part = (props) => (
  <p> {props.name} {props.exercises}</p>
)

const Content= (props) =>(
  <Part name = {props.name} exercises = {props.exercises} />
)



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = "State of a component"
  // const exercises3 = 14

  return (
    <div>
      <Header name = {course}/>
      <Content name = {part1} exercises = {exercises1}/>
     
    
    


      {/* <p>
        Number of Exercises {exercises1 + exercises2 + exercises3}
      </p> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))