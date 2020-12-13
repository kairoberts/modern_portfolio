import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404: Page Does Not Exist</h1>
      <Link exact to="/">
        <button className="buttons">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
