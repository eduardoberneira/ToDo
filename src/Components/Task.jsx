import styles from "./Task.module.css"
import { CheckCircle, Trash, Circle  } from "phosphor-react"
import { useState } from "react";

export function Task ({ onDeleteTask, content}) {
  
  const [tt, setTT] = useState(styles.task)

  function handleDeleteTask(){
    onDeleteTask(content.id);
  }

  function change(){
    content.done =!content.done
   setTT( content.done ?`${styles.task} ${styles.done}` : styles.task)

  

  }

  return (
    <div className={tt}>
      <input onClick={change}
      type="checkbox" />
      <p>{content.task}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={16} /> 
      </button>
    </div>
  )
}