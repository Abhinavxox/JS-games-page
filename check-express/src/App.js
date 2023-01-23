import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";

const fetchFromServer = async () => {
  const requestURL = `http://localhost:5000/a`;
  const response = await axios.get(requestURL);
  return response.data;
};

function App() {
  let users = {};
  let flag = false;

  const getUsers = async () => {
    const data = await fetchFromServer();
    users = data;
    if (users != null) {
      flag = true;
    }
  };

  function RenderUsers() {
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
  }

  return (
    <div className="ui segment">
      <Form />
      <div className="ui segment">
        <h1>Registered Users:</h1>
        <button className="ui button" onClick={getUsers}>
          GET
        </button>
        <div className="users list">
          <RenderUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
