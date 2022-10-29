import styles from './App.module.css'
import { Header } from './Components/Header'
import { Sheet } from './Components/Sheet'
import { TaskBar } from './Components/TaskBar'
import { Task } from './Components/Task'
import { TasksHeader } from './Components/TasksHeader'
import { useState } from 'react'

export function App(props) {

  const [tasks, setTasks] = useState([])


  const [newTaskText, setNewTaskText] = useState('')
  

  function handleCreateNewTask() {
    
    event.preventDefault() 

    setTasks([...tasks, {id:tasks.length+1,task:newTaskText,done:false}]);

   

    setNewTaskText('')

  };

  function handleNewTaskChange(){
    setNewTaskText(event.target.value); 
  }

  function deleteTask(taskToDelete){
    
    const taskWithoutDeletedOne = tasks.filter( tasks => {
      return tasks.id !== taskToDelete;
    })

    setTasks(taskWithoutDeletedOne);
  }

  return (
   <div>
    <header>
      <Header />
    </header>
    <div className={styles.content}>
      <TaskBar 
        handleCreateNewTask={handleCreateNewTask}
        handleNewTaskChange={handleNewTaskChange}
        newTaskText={newTaskText}
      />
      <TasksHeader quantity={tasks.length} />
      <main>
        {tasks.length
          ?

            tasks.map( task => {
              return (
              <Task
                onDeleteTask={deleteTask}
                key={task.id}
                content={task}
               />
              )
              
             })
          : <Sheet/>
      }
      </main>
    </div>
   </div>
  )
}

