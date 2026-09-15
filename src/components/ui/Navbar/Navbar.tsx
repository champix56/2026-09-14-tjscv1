import { useEffect, useState, type FC } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [state, setState] = useState<Array<any>>([])
  useEffect(() => {
    //montage & update
    return () => {
      //demontage
    }
  }, [])
  
  return (
  <div className={styles.Navbar} data-testid="Navbar">
    Navbar Component
  </div>
);}

export default Navbar;
