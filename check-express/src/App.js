import axios from "axios";
import Form from "./components/Form";

const fetchFromServer = async () => {
  const requestURL = `http://localhost:5000/a`;
  const response = await axios.get(requestURL);
  return response.data;
};

function App() {
  const RenderUsers = async () => {
    const data = await fetchFromServer();
    console.log(data);
    return (
      <>
        {/* {data.users.map((data) => (
          <div key={data.name}>
            {data.name} : {data.password}
          </div>
        ))} */}
      </>
    );
  };

  return (
    <div className="ui segment">
      <Form />
      <div className="ui segment">
        <h1>Registered Users:</h1>
        <div className="users list">
          <RenderUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
