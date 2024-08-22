import React from 'react';
import './styles/Placement.css'; // Import the CSS file for styling

const Placement = ({ Placement }) => {
  return (
    <div className="placement-container">
      <div className="placement-info">
        <div className="placement-amount">{Placement.avg}</div>
        <div className="placement-type">Average Package</div>
      </div>
      <div className="placement-info">
        <div className="placement-amount">{Placement.highest}</div>
        <div className="placement-type">Highest Package</div>
      </div>
      <div className="compare-placement">Compare Placement</div>
    </div>
  );
}

export default Placement;