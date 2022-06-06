import { Outlet } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className="App">
      <div className={styles.header}>
        <span className={styles.title}>Weather Application</span>
      </div>
    <Outlet />
    </div>
  );
}

export default Header;