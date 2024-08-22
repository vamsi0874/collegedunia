import React from 'react';
import './styles/CourseFees.css';

const CourseFees = ({ Fees }) => {
  return (
    <div className="course-fees-container">
      <div>{Fees}</div>
      <div>BE/BTech</div>
      <div>-1st year</div>
      <div>Compare Fees</div>
    </div>
  );
}

export default CourseFees;
