import { useState } from "react"
import styles from "./TasksHeader.module.css"

export function TasksHeader ( {quantity}) {

  return (
    <div className={styles.bar}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span>{quantity}</span>
      </div>

      <div className={styles.completedTasks}>
      <p>Concluidas</p>
      <span>{0}</span>
      </div>
    </div>
  )
}