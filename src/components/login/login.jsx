import styles from './login.module.css';
import {useHistory} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import {useEffect} from "react";

const Login = ({authService, onLogout}) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: {id: userId},
    })
  };

  const onLogin = event => {
    authService.login(event.target.textContent)
      .then((data) => goToMaker(data.user.uid))
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid);
    })
  });
  return (
      <div className={styles.wrapper}>
        <Header onLogout={onLogout}/>
        <div className={styles.loginbox}>
          <h1 className={styles.logintitle}>Login</h1>
          <div className={styles.methodbox}>
            <span className={styles.method} onClick={onLogin}>Google</span>
            <span className={styles.method} onClick={onLogin}>Github</span>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Login;