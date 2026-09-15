import React, { type MouseEventHandler } from "react";
import styles from "./Button.module.css";
/*type T_Buttonprops = {
  type: string;
  text: any;
};*/
interface I_ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode | Array<React.ReactNode>;
  className?: "primary" | "danger";
  onButtonClick?:()=>void
  style?:React.CSSProperties
  bgcolor?:string
}
const Button: React.FC<I_ButtonProps> = ({ children, type='button', className, onButtonClick, style, bgcolor}) => {

  const getClassNameFromProps = () => {
    if (className) return " " + styles[className];
    else return "";
  };
  return (
    <button
      style={{...style,textAlign:'center',backgroundColor:bgcolor}}
      className={`${styles.Button}${getClassNameFromProps()}`}
      type={type}
      onClick={()=>{
        if(onButtonClick){
          onButtonClick()
        }
      }}
    >
      {children}
    </button>
  );
};
export default Button;
interface IPrimaryButtonProps{
  type?: "button" | "submit" | "reset";
  children: React.ReactNode | Array<React.ReactNode>;
    onButtonClick?:()=>void


}
export const PrimaryButton : React.FC<IPrimaryButtonProps>= (props) => {
  return (
    <Button {...props} className="primary" />
  )
}
