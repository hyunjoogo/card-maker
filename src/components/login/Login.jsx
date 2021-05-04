import styles from './login.module.css';

const Login = ({authService, onLogout}) => {
  const onLogin = event => {
    authService.login(event.target.textContent)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        console.log(credential,user,token)
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = error.credential;
    });
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {onLogout && <button className={styles.logout}>Logout</button>}
          <img alt="logo" src="images/logo.png"/>
          <h1>Business Card Maker</h1>
        </div>
        <div className={styles.loginbox}>
          <h1 className={styles.logintitle}>Login</h1>
          <div className={styles.methodbox}>
            <span className={styles.method} onClick={onLogin}>Google</span>
            <span className={styles.method} onClick={onLogin}>Github</span>
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