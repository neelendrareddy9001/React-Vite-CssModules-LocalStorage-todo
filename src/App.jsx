import { Header } from './components/header'
import './App.css'
import {Tasks} from './components/Tasks'
import {useState} from 'react'

function App() {
  const [task, setTask] = useState([]);
  function addTask (taskTitle) {
    setTask ([
      ...task,
      {
        id : crypto.randomUUID(),
        title : taskTitle,
        isCompleted : false
      }
    ]);
  }
   return (
    <Header onAddTask={addTask}/>
    <Tasks tasks={tasks}/>
  )
}

export default App
