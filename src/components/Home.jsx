import {useHistory, useLocation} from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const handleClick = () => {
    history.push("/about")
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>Go to About</button>
    </>
  )
}

export default Home;