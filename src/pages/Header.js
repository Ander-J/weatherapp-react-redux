import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className="App">
      <div className={styles.header}>
        <Link to="/" className={styles.title}>
          Weather Application
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
