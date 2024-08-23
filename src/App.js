import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscriptionPage from './components/SubscriptionPage';
import CheckoutPage from './components/CheckoutPage';
import Broke from './components/Broken';  // Import the Checkout page component

// Import other components...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubscriptionPage />} />
        <Route path="/Broke" element={<Broke />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} /> {/* Update to use 'element' */}
        {/* Other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
