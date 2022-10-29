import styles from "./TaskBar.module.css"
import { PlusCircle } from "phosphor-react"

export function TaskBar ({newTaskText, handleCreateNewTask, handleNewTaskChange}) {

  return (
    <form 
      onSubmit={handleCreateNewTask} 
      className={styles.taskForm}>
    

      <textarea
        name="task"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={newTaskText}
        required
      />

      <button type="submit"> 
        Criar 
        <PlusCircle size={16} weight="bold" />
      </button>

    </form>
  )
}