import React from "react";
import PropTypes from "prop-types";

const Control = props => {
  const { data: bus, onMove, onRotate, onReport } = props;
  return (
    <div className="bus-control">
      <div className="container-fluid">
        <h3>Step 2: Move and rotate the bus</h3>
        <div className="btn-group" role="group" aria-label="controls">
          <button
            type="button"
            className="btn btn-secondary"
            disabled={!bus.placed}
            onClick={e => onMove(e)}
          >
            Move
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={!bus.placed}
            onClick={e => onRotate(e, "left")}
          >
            Left
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            disabled={!bus.placed}
            onClick={e => onRotate(e, "right")}
          >
            Right
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!bus.placed}
            onClick={e => onReport(e)}
          >
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

Control.propTypes = {
  data: PropTypes.object.isRequired,
  onMove: PropTypes.func.isRequired,
  onRotate: PropTypes.func.isRequired,
  onReport: PropTypes.func.isRequired
};

export default Control;
