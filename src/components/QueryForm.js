const QueryForm =  (props) => {
  return(
    <>
      <h1>hello를 몇번 출력할까요?</h1>
      <form action="/hello">
        <input type="text" name="count" />
        <input type="submit" value="출력" />
      </form>
    </>
  )
};

export default QueryForm;