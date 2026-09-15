import { useEffect, useState, type FC } from 'react';
import styles from './MemeSvgViewer.module.css';

interface MemeSvgViewerProps {}

const MemeSvgViewer: FC<MemeSvgViewerProps> = ({}) => {
  const [state, setState] = useState<Array<any>>([])
  useEffect(() => {
    //montage & update
    return () => {
      //demontage
    }
  }, [])
  
  return (
  <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
    MemeSvgViewer Component
  </div>
);}

export default MemeSvgViewer;
