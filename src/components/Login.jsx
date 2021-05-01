import styles from './Login.module.css'
const Login = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <img alt="logo" src="images/logo.png"/>
          <h1>Business Card Maker</h1>
        </div>
        <div className={styles.loginbox}>
          <h1 className={styles.logintitle}>Login</h1>
          <div className={styles.methodbox}>
            <span className={styles.method}>Google</span>
            <span className={styles.method}>Github</span>
          </div>
        </div>
        <div className={styles.footer}>
          <span className={styles.text}>Code your dream</span>
        </div>
      </div>
    </>
  )
}

export default Login;