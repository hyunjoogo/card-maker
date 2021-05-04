import styles from "./header.module.css";

const Header = ({onLogout}) => {
  return (
    <div className={styles.title}>
      {onLogout &&
      <button className={styles.logout}
              onClick={onLogout}>
        Logout
      </button>}
      <img alt="logo" src="images/logo.png"/>
      <h1>Business Card Maker</h1>
    </div>
  )
}

export default Header;