import type React from "react";
import styles from "./Button.module.css";
/*type T_Buttonprops = {
  type: string;
  text: any;
};*/
interface I_ButtonProps {
  type?: "button"|"submit"|"reset";
  children:React.ReactNode|Array<React.ReactNode>
}
const Button: React.FC<I_ButtonProps> = ({children,type}) => {
  return (
    <button className={`${styles.Button} ${styles.primary}`} type={type}>{children}</button>
  );
};
export default Button;
