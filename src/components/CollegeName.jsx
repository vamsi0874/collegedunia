
import React from 'react';
import './styles/College.css'; 

const College = ({ name,city,state }) => {
    return (
        <div className="college-container">
            <div className="college-info">
                <div className="college-name">{name}</div>
                <div className="college-location">{city}, {state}</div>
            </div>
            <div>
                <select className="college-course">
                    <option>BTech</option>
                    
                </select>
            </div>
            <div className="college-actions">
                <div className="apply-now">Apply Now</div>
                <div className="download">Download</div>
            </div>
        </div>
    );
}

export default College;
