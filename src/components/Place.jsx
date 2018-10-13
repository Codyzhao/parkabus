import React from "react";

const Place = props => {
  const { data: bus, onChangePlaceAttribute, onPlaceBus } = props;

  return (
    <div className="bus-control">
      <div className="container-fluid">
        <h3>Step 1: Place a bus</h3>
        <form
          className="mb-3"
          onSubmit={e => {
            onPlaceBus(e);
          }}
        >
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="positionX">X position</label>
                <select
                  name="positionX"
                  id="positionX"
                  className="custom-select"
                  value={bus.positionX}
                  onChange={e => onChangePlaceAttribute(e)}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="positionY">Y position</label>
                <select
                  name="positionY"
                  id="positionY"
                  className="custom-select"
                  value={bus.positionY}
                  onChange={e => onChangePlaceAttribute(e)}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="face">Facing</label>
                <select
                  name="face"
                  id="face"
                  className="custom-select"
                  value={bus.face}
                  onChange={e => onChangePlaceAttribute(e)}
                >
                  <option value="north">North</option>
                  <option value="east">East</option>
                  <option value="south">South</option>
                  <option value="west">West</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 align-self-end">
              <div className="form-group">
                <button className="btn btn-primary btn-block">Place bus</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Place;
