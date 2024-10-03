import React, { useState, useEffect } from 'react';
import ReusableCard from '../Reusables/ReusableCard';
import { getSubscriptions } from '../utils/services/subscriptionServices';
import '../utils/Assets/CSS/SubscriptionPage.css'; 
import Header from '../Reusables/Header';
import Footer from '../Reusables/Footer';

const SubscriptionPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subscriptionsData = await getSubscriptions();
        setSubscriptions(subscriptionsData || []); 
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="subscription-page">
      <Header/>
      <h1 className="page-title">Set up your account, pick a plan later.</h1>
      <p className="page-description">
        Choose the plan that's right for you. Whether you're just getting started or well down the path to personalization, we've got you covered.
      </p>
      <div className="subscription-cards-container">
        {subscriptions.map((sub, index) => (
          <ReusableCard 
            key={sub._id}
            index={index} // Pass the index of the card
            subscription={sub}
            onClick={() => handleSubscribe(sub._id)}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );

  function handleSubscribe(subscriptionId) {
    console.log("Subscription selected:", subscriptionId);
  }
};

export default SubscriptionPage;
