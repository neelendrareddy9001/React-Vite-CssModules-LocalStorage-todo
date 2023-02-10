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
  
  function deleteTaskById (taskId) {
    const newTasks = task.filter(tasks => tasks.id !== taskId)
    setTask(newTasks)
  }
  
  function toggleTaskCompletedById(taskId) {
    const newTasks = task.map(tasks =>{
      if(tasks.id === taskId){
        return {
          ...task,
          isCompleted : !task.isCompleted
        }
      } 
      return task;
    });
    setTask(newTasks);
  }
   return (
    <Header onAddTask={addTask}/>
    <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskById}/>
  )
}

export default App
