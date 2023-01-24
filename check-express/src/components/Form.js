import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestURL = `http://localhost:5000/a`;
    await axios
      .post(requestURL, formData)
      .then((response) => {
        if (response.data == "Data appended succesfully") {
          alert(response.data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="ui large form">
      <form onSubmit={handleSubmit}>
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="ui fluid large teal submit button" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
