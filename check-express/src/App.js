import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [Users, setUsers] = useState();
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const requestURL = `http://localhost:5000/a`;
    axios.get(requestURL).then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="ui segment">
      <Form />
      <div className="ui segment">
        <h1>Registered Users:</h1>
        {Loading ? (
          <HashLoader
            color="#000000"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div className="users list">
            <ul>
              {Users &&
                Users.users.map((data) => {
                  return (
                    <ul key={data.name}>
                      <li>{data.name}</li>
                      <li>{data.password}</li>
                    </ul>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
