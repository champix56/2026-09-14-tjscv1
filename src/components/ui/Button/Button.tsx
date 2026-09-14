import type React from "react";
import styles from "./Button.module.css";
/*type T_Buttonprops = {
  type: string;
  text: any;
};*/
interface I_ButtonProps {
  type?: "button"|"submit"|"reset";
  text: any;
}
const Button: React.FC<I_ButtonProps> = ({type,text}) => {
  return (
    <button className={`${styles.Button} ${styles.primary}`} type={type}>{text}</button>
  );
};
export default Button;
