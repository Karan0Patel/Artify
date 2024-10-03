import React from 'react';
import '../utils/Assets/CSS/ReusableCard.css';

const ReusableCard = ({ index, subscription, onClick }) => {
  // Define card background based on the index
  const cardClass = (index === 0) ? 'platinum-card' :
                    (index === 1) ? 'gold-card' :
                    (index === 2) ? 'silver-card' : '';

  return (
    <div className={`subscription-card ${cardClass}`}>
      <h2>{subscription.subscriptionType}</h2>
      <h3 className="price">${subscription.subscriptionPrice} / month</h3>
      <ul className="feature">
        {subscription.features && subscription.features.length > 0 ? (
          subscription.features.map((feature, index) => <li key={index}>{feature}</li>)
        ) : (
          <li>No features available</li>
        )}
      </ul>
      <button className="select-plan-btn" onClick={onClick}>Select Plan</button>
    </div>
  );
};

export default ReusableCard;
