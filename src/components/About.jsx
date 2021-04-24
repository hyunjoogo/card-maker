import {useHistory, useLocation} from "react-router-dom";

const About = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const handleClick = () => {
    history.push("/")
  }

  return (
    <>
      <h1>About</h1>
      <button onClick={handleClick}>Go to Home</button>
    </>
  )
}

export default About;