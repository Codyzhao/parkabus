import React from "react";

const Notification = props => {
  return <div className="alert alert-danger text-center">{props.massage}</div>;
};

export default Notification;
