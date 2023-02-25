import React, { useState } from "react";
import axios from "axios";
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  password: String,
});

const Form = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestURL = `http://localhost:5000/a`;
    // axios
    //   .post(requestURL, formData)
    //   .then((response) => {
    //     if (response.data == "Data appended succesfully") {
    //       alert(response.data);
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });

    //post to db
    const uri = "mongodb://localhost:27017/UsersDB";
    mongoose.connect(uri);

    const User = mongoose.model("User", userSchema);
    const name = formData.name;
    const password = formData.password;
    const newUser = new User({ name, password });

    newUser
      .save()
      .then(() => console.log("New user saved"))
      .catch((err) => console.log(err));

    mongoose.disconnect();
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
