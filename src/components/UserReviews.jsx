import React from 'react';
import './styles/UserReviews.css'; 

const UserReviews = ({ Review }) => {
   
    return (
        <div className="user-reviews-container">
            <div className="user-reviews-info">
                <div className="user-reviews-score">{Review} / 10</div>
                <div className="user-reviews-text">based on 289 user reviews</div>
            </div>
            <div className="user-reviews-select">
                <select>
                    <option>Best in Social Life</option>
                    <option>Best in Infrastructure</option>
                </select>
            </div>
        </div>
    );
}

export default UserReviews;
