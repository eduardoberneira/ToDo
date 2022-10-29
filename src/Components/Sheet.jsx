import styles from "./Sheet.module.css"
import Clipboard from "../Assets/Clipboard.svg"
 
export function Sheet () {
  return(
    <div className={styles.sheet}>
      <img src={Clipboard}/>
      <p>Você ainda não tem tarefas cadastradas</p>
      Crie tarefas e organize seus itens a fazer
    </div>
  )
}