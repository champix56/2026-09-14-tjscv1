import React, { useEffect, useState, type MouseEventHandler } from "react";
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
  const [isClicked, setIsClicked] = useState(false)
  useEffect(() => {
    console.log('effect');
    if(isClicked)
      {setTimeout(()=>{
        console.log('timeOut');

        setIsClicked(false)
      },1000)}
  }, [isClicked])

  /**
   * assemble section of className based on className props
   * @returns string class composition with space or nothing if undefined
   */
  const getClassNameFromProps = () => {
    if (className) return " " + styles[className];
    else return "";
  };
  return (
    <button
      style={{...style,textAlign:'center',backgroundColor:bgcolor}}
      className={`${styles.Button}${getClassNameFromProps()}${isClicked?' '+styles.clicked:''}`}
      type={type}
      onClick={()=>{
        setIsClicked(true)
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
