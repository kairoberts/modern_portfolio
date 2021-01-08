import React, { useContext } from "react";
import { TiTickOutline } from "react-icons/ti";
import AlertContext from "../context/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className="alert">
        <p>{alert.message}</p>
        <TiTickOutline className="alert-icon" size={30} />
      </div>
    )
  );
};

export default Alert;
