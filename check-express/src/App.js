import axios from "axios";
import { useState } from "react";
import Form from "./components/Form";

const fetchFromServer = async () => {
  const requestURL = `http://localhost:5000/a`;
  const response = await axios.get(requestURL);
  return response.data;
};

function App() {
  const [users, setusers] = useState();
  const [flag, setFlag] = useState(false);

  const getUsers = async () => {
    const data = await fetchFromServer();
    setusers(data);
    if (users != null) {
      setFlag(true);
    }
    console.log(users);
  };

  const RenderUsers = () => {
    if (flag) {
      return (
        <>
          {users.users.map((data) => (
            <div key={data.name}>
              {data.name} : {data.password}
            </div>
          ))}
        </>
      );
    }
    return <></>;
  };

  return (
    <div className="ui segment">
      <Form />
      <div className="ui segment">
        <h1>Registered Users:</h1>
        <button onClick={getUsers}>GET</button>
        <div className="users list">
          <RenderUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
