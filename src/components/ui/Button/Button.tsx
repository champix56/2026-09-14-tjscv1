import React from "react";
import styles from "./Button.module.css";
/*type T_Buttonprops = {
  type: string;
  text: any;
};*/
interface I_ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode | Array<React.ReactNode>;
  className?: "primary" | "danger";
}
const Button: React.FC<I_ButtonProps> = ({ children, type, className }) => {
  const getClassNameFromProps = () => {
    if (className) return " " + styles[className];
    else return "";
  };
  return (
    <button
      className={`${styles.Button}${getClassNameFromProps()}`}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
