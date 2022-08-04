import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";

const App = () => {
  const text = { text: 'Click' }
  return (
    // <form>
    //   <label classNameName="label" htmlFor="name">Email :</label>
    //   <input id="name" type="text" />
    //   <button style={{ backgroundColor: 'red', color: 'white' }}>{text.text}</button>
    // </form>

    <div className="ui comments" >
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)