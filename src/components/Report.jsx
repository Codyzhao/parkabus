import React from "react";

const Report = props => {
  const { status } = props;
  return (
    <div className="alert alert-success text-center" role="alert">
      The bus is currently parked at <strong>X {status.positionX}</strong> and{" "}
      <strong>Y {status.positionY}</strong>, facing{" "}
      <strong>{status.face}</strong>
    </div>
  );
};

export default Report;
