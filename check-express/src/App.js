import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";

const fetchFromServer = async () => {
  const requestURL = `http://localhost:5000/a`;
  const response = await axios.get(requestURL);
  return response.data;
};

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchFromServer().then((data) => setUsers(data));
  }, []);

  console.log(users);
  return (
    <div className="ui segment">
      <Form />
      <div className="ui segment">
        <h1>Registered Users:</h1>
        <div className="users list"></div>
      </div>
    </div>
  );
}

export default App;
