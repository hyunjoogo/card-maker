import {useHistory, useLocation} from "react-router-dom";
import queryString from "query-string";

const Hello = (props) => {
  const location = useLocation();
  const history = useHistory();
  const {count} = queryString.parse(location.search);

  const goHome = () => {
    history.goBack("/");
  }


  return (
    <div >
      <h1>Hello {count}</h1>
      <button onClick={goHome}>Go Home</button>
    </div>
  )
};

export default Hello;