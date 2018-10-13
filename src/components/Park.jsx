import React, { Component } from "react";
import Bus from "./Bus";
import Grid from "./Grid";
import Place from "./Place";
import Control from "./Control";
import Notification from "./Notification";
import Report from "./Report";
import config from "./../config.json";

class Park extends Component {
  state = {
    bus: {
      positionX: 0,
      positionY: 0,
      face: "north",
      placed: false
    },
    error: "",
    showReport: false
  };

  createGrids = () => {
    const gridLength = config.gridSize;
    let grids = [];
    let row = [];
    for (let i = 0; i < gridLength; i++) {
      for (let j = 0; j < gridLength; j++) {
        row.push(<Grid className={`grid-${i}-${j}`} key={`grid-${i}-${j}`} />);
      }
      grids.push(row);
      row = [];
    }

    return grids;
  };

  handlePlaceAttribute = ({ currentTarget: select }) => {
    const bus = { ...this.state.bus };
    bus[select.name] = parseInt(select.value);
    bus.placed = false;
    this.setState({
      bus: bus,
      error: "",
      showReport: false
    });
  };

  handlePlaceBus = e => {
    e.preventDefault();
    const bus = { ...this.state.bus };
    bus.placed = true;
    this.setState({
      bus: bus,
      error: "",
      showReport: false
    });
  };

  stopBus = msg => {
    this.setState({
      error: msg,
      showReport: false
    });
  };

  handleMove = () => {
    const { bus } = this.state;
    switch (bus.face) {
      case "north":
        if (bus.positionY < config.gridSize - 1) {
          this.setState({
            bus: {
              ...bus,
              positionY: bus.positionY + 1
            },
            error: "",
            showReport: false
          });
        } else {
          this.stopBus(
            `You can’t go further ${bus.face}! Please stay in the carpark.`
          );
        }

        break;
      case "south":
        if (bus.positionY > 0) {
          this.setState({
            bus: {
              ...bus,
              positionY: bus.positionY - 1
            },
            error: "",
            showReport: false
          });
        } else {
          this.stopBus(
            `You can’t go further ${bus.face}! Please stay in the carpark.`
          );
        }
        break;
      case "east":
        if (bus.positionX < config.gridSize - 1) {
          this.setState({
            bus: {
              ...bus,
              positionX: bus.positionX + 1
            },
            error: "",
            showReport: false
          });
        } else {
          this.stopBus(
            `You can’t go further ${bus.face}! Please stay in the carpark.`
          );
        }
        break;
      case "west":
        if (bus.positionX > 0) {
          this.setState({
            bus: {
              ...bus,
              positionX: bus.positionX - 1
            },
            error: "",
            showReport: false
          });
        } else {
          this.stopBus(
            `You can’t go further ${bus.face}! Please stay in the carpark.`
          );
        }
        break;
      default:
        return;
    }
  };

  handleRotate = e => {
    const directions = config.directions;
    const { bus } = this.state;
    let newDireciton = "";
    let currentIndex = directions.indexOf(bus.face);
    if (e.target.name === "right") {
      if (directions[currentIndex + 1]) {
        newDireciton = directions[currentIndex + 1];
      } else {
        newDireciton = directions[0];
      }
    } else {
      if (directions[currentIndex - 1]) {
        newDireciton = directions[currentIndex - 1];
      } else {
        newDireciton = directions[directions.length - 1];
      }
    }

    const newBus = { ...bus };
    newBus.face = newDireciton;
    this.setState({
      bus: newBus,
      error: "",
      showReport: false
    });
  };

  handleReport = () => {
    this.setState({
      showReport: true,
      error: ""
    });
  };

  renderReport = () => {
    if (!this.state.showReport) {
      return;
    }
    return <Report status={this.state.bus} />;
  };

  renderBus = () => {
    const { bus } = this.state;
    if (!this.state.bus.placed) {
      return;
    }
    return <Bus bus={bus} />;
  };

  renderError = () => {
    const { error } = this.state;
    if (!error) {
      return;
    }
    return <Notification massage={error} />;
  };

  render() {
    const { bus } = this.state;
    return (
      <React.Fragment>
        {this.renderError()}
        {this.renderReport()}
        <Place
          data={bus}
          onChangePlaceAttribute={this.handlePlaceAttribute}
          onPlaceBus={this.handlePlaceBus}
        />
        <Control
          placed={bus.placed}
          onMove={this.handleMove}
          onReport={this.handleReport}
          onRotate={this.handleRotate}
        />
        <div className="park">
          {this.createGrids()}
          {this.renderBus()}
        </div>
      </React.Fragment>
    );
  }
}

export default Park;
