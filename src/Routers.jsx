import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Switch, useLocation} from "react-router-dom";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function Routers({FileInput, authService}) {
  const location = useLocation();
  const timeout = { enter: 800, exit: 400 };
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={timeout}
        classNames="pageSlider"
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <section className="route-section">
          <Switch location={location}>
            <Route exact path="/">
              <Login authService={authService}/>
            </Route>
            <Route path="/maker">
              <Maker FileInput={FileInput} authService={authService} />
            </Route>
            {/*<Route path="/maker">*/}
            {/*  <Maker authService={authService}/>*/}
            {/*</Route>*/}
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Routers;