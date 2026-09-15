import { useEffect, useState, type FC } from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const [state, setState] = useState<Array<any>>([])
  useEffect(() => {
    //montage & update
    return () => {
      //demontage
    }
  }, [])
  
  return (
  <div className={styles.Footer} data-testid="Footer">
    Footer Component
  </div>
);}

export default Footer;
