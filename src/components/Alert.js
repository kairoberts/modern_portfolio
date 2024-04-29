import React, { useContext } from "react";
import AlertContext from "../context/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className="alert">
        <p>{alert.message}</p>
      </div>
    )
  );
};

export default Alert;
