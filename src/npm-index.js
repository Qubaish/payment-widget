import React from 'react';
import PropTypes from 'prop-types';
import PaymentWidget from './organisms/payment-widget';
import { Provider } from 'react-redux'
import { store } from './store';

function Payment({amount, seconds, partnerName}){
    return (
    <Provider store={store}>
      <PaymentWidget
        amount={amount}
        seconds={seconds}
        partnerName={partnerName}
      />
    </Provider>
    );
}

Payment.defaultProps = {
  amount: "KD1000,000.00",
  seconds: 10,
  partnerName: "Business Name"
}

Payment.propTypes = {
  amount: PropTypes.string,
  seconds: PropTypes.number,
  partnerName: PropTypes.string,
}

export default Payment;
