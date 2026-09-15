import { type ReactNode, type FC } from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {
  children:ReactNode|Array<ReactNode>
}

const TemplateName: FC<TemplateNameProps> = ({children}) => {
  return (
  <div className={styles.TemplateName} data-testid="TemplateName">
    {children}
  </div>
);}

export default TemplateName;
