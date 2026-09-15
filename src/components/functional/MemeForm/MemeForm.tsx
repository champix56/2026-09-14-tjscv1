import { useEffect, useState, type FC } from 'react';
import styles from './MemeForm.module.css';

interface MemeFormProps {}

const MemeForm: FC<MemeFormProps> = ({}) => {
  const [state, setState] = useState<Array<any>>([])
  useEffect(() => {
    //montage & update
    return () => {
      //demontage
    }
  }, [])
  
  return (
  <div className={styles.MemeForm} data-testid="MemeForm">
    MemeForm Component
  </div>
);}

export default MemeForm;
