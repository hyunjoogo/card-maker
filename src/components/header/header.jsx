import styles from "./header.module.css";
import Toggle from "../toggle/toggle";

const Header = ({onLogout, mode}) => {
  return (
    <div className={styles.header}>
      {onLogout &&
      <button className={styles.logout}
              onClick={onLogout}>
        Logout
      </button>}
      <div>
        <img className={styles.logo} alt="logo" src="images/logo.png"/>
        {/*<Toggle/>*/}
      </div>
      <h1 className={styles.title}>Business Card Maker</h1>
    </div>
  )
}

export default Header;