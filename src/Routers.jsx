import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Switch, useLocation} from "react-router-dom";
import Login from "./components/login/Login";
import Maker from "./components/maker/maker";

function Routers({authService}) {
  const location = useLocation();
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <section className="route-section">
          <Switch location={location}>
            <Route exact path="/">
              <Login authService={authService}/>
            </Route>
            <Route path="/maker">
              <Maker/>
            </Route>
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Routers;