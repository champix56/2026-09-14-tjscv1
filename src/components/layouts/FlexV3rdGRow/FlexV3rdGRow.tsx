import { type ReactNode, type FC } from 'react';
import styles from './FlexV3rdGRow.module.css';

interface FlexV3rdGRowProps {
  children:ReactNode|Array<ReactNode>
}

const FlexV3rdGRow: FC<FlexV3rdGRowProps> = ({children}) => {
  return (
  <div className={styles.FlexV3rdGRow} data-testid="FlexV3rdGRow">
    {children}
  </div>
);}

export default FlexV3rdGRow;
