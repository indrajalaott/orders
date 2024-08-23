import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SubscriptionPage.css';
import Navbar from './Navbar';

const plans = [
  { id: 1, name: 'Basic', price: 299, features: ['Full HD streaming', '1 device at a time', '15 Days of Validity'] },
  { id: 2, name: 'Standard', price: 599, features: ['Full HD streaming', '2 devices at a time', '30 Days of Validity'] },
  { id: 3, name: 'Premium', price: 999, features: ['Full HD streaming', '3 devices at a time', '60 Days of Validity'] },
];

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    navigate(`/checkout/${planId}`);
  };

  const handleSubscribe = (planId) => {
    setSelectedPlan(planId);
    navigate(`/checkout/${planId}`);
  };

  return (
    <div className="subscription-page">
      <Navbar />
      <div className="subscription-container">
        <h1>The OTT of Your Fantasies</h1>
        <h2></h2>
        <div className="plans-container">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`plan ${selectedPlan === plan.id ? 'selected' : ''}`}
              onClick={() => handleSelectPlan(plan.id)}
            >
              <h3>{plan.name}</h3>
              <p className="price">₹{plan.price}</p>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button 
                className="subscribe-button" 
                onClick={() => handleSubscribe(plan.id)}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <a href="https://policy.indrajala.in/Terms-of-Usage" target="_blank" rel="noopener noreferrer">Terms and Usage</a>
          <a href="https://policy.indrajala.in/Data-Policy" target="_blank" rel="noopener noreferrer">Data Policy</a>
          <a href="https://policy.indrajala.in/Refund-Policy" target="_blank" rel="noopener noreferrer">Refund Policy</a>
          <a href="https://policy.indrajala.in/" target="_blank" rel="noopener noreferrer">Detailed Policy Page</a>
        </div>
        <div className="footer-text">
          © 2024, All rights reserved, Indrajala Movie Makers LLP
        </div>
      </footer>
    </div>
  );
};

export default SubscriptionPage;
