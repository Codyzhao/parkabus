import React from "react";
import Image from "./../images/bus-top.png";

const Bus = props => {
  const { bus } = props;
  return (
    <div
      className={`bus pos-${bus.positionX}-${bus.positionY} face-${bus.face}`}
    >
      <img src={Image} width="100" alt="" />
    </div>
  );
};

export default Bus;
