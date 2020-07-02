import React from 'react';
import PaymentWidget from './organisms/payment-widget/Loadable';

function App() {
  return (
    <div className="App">
      <PaymentWidget
        amount="KD1000,000.00"
        seconds={10}
        partnerName="Business Name"
      />
    </div>
  );
}

export default App;
