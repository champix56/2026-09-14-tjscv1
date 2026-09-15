import { type ReactNode, type FC } from 'react';
import styles from './FlexH1RstGrow.module.css';

interface FlexH1RstGrowProps {
  children:ReactNode|Array<ReactNode>
}

const FlexH1RstGrow: FC<FlexH1RstGrowProps> = ({children}) => {
  return (
  <div className={styles.FlexH1RstGrow} data-testid="FlexH1RstGrow">
    {children}
  </div>
);}

export default FlexH1RstGrow;
