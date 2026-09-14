import type React from "react"
import styles from './Button.module.css'
const Button:React.FunctionComponent=()=>{
    return <button className={`${styles.Button} ${styles.primary}`}>Benjamin</button>
}
export default Button