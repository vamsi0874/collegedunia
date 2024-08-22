import React from 'react';
import './styles/Ranking.css'; 
const Ranking = ({ rank }) => {
  return (
    <div className="ranking-container">
      <div className="ranking-info">
        <div>{rank}/131 in India</div>
        <div>India Today 2023</div>
      </div>
      <div className="select-container">
        <select>
          <option>India Today</option>
          <option>Nirf</option>
        </select>
      </div>
    </div>
  );
};

export default Ranking;
