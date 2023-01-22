import React from "react";

const Form = () => {
  return (
    <div className="ui large form">
      <form action="" method="POST">
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <button className="ui fluid large teal submit button" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
