import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Switch, useLocation} from "react-router-dom";
import QueryForm from "./components/QueryForm";
import Login from "./components/login/Login";
import Hello from "./components/Hello";

function Routers() {
  const location = useLocation();
  console.log(location)
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <section className="route-section">
          <Switch location={location}>
            <Route path="/" exact component={(props) => <QueryForm {...props} />}/>
            {/*<Route path="/login">*/}
            {/*  <Login/>*/}
            {/*</Route>*/}
            <Route path="/hello">
              <Hello />
            </Route>
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Routers;