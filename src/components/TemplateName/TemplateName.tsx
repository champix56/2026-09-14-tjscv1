import { useEffect, useState, type FC } from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = ({}) => {
  const [state, setState] = useState<Array<any>>([])
  useEffect(() => {
    //montage & update
    return () => {
      //demontage
    }
  }, [])
  
  return (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);}

export default TemplateName;
