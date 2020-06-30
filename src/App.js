import React from 'react';
import PaymentWidget from './organisms/payment-widget';
import './App.css';

function App() {
  return (
    <div className="App">
      <PaymentWidget
        amount="KD1000,000.00"
        seconds={10}
      />
    </div>
  );
}

export default App;
