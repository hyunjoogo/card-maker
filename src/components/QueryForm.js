import {Link} from "react-router-dom";

const QueryForm =  (props) => {
  return(
    <div style={{position:"absolute",left:0,top:0}}>
      <h1>hello를 몇번 출력할까요?</h1>
      <form action="/hello">
        <input type="text" name="count" />
        <input type="submit" value="출력" />
      </form>
      <Link to="/hello">222</Link>
    </div>
  )
};

export default QueryForm;