import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import image1 from './image/a.jpg';
import image2 from './image/b.png';
import image3 from './image/c.jpg';
import UserCard from "./UserCard";

const App = () => {
  const text = { text: 'Click' }
  return (
    // <form>
    //   <label classNameName="label" htmlFor="name">Email :</label>
    //   <input id="name" type="text" />
    //   <button style={{ backgroundColor: 'red', color: 'white' }}>{text.text}</button>
    // </form>

    <div className="ui comments" style={{ padding: '5%' }}>
      <UserCard>
        <SingleComment
          name="Alex"
          date="Today at 4:50pm"
          text="It's amazing!"
          image={image1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Sarah"
          date="Today at 4:53pm"
          text="Yes it is."
          image={image2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Johnny"
          date="Today at 4:56pm"
          text="How wonderful."
          image={image3}
        />
      </UserCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)