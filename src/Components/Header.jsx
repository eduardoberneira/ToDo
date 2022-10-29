import rocket from "../Assets/Rocket.svg"
import styles from "./Header.module.css"

export function Header() {
  return (
      <div className={styles.logo}>
        <img src={rocket} alt="" />
        <p>to<span>do</span></p>
      </div>
  )
}