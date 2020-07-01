import React from 'react';
import { render, fireEvent } from '../../test-utils';
import PaymentWidget from './index';
import { createStore } from 'redux'

describe('<PaymentWidget />', () => {
    it('checking snapshot', () => {
        const store = createStore(() => ({ isMatched: false }))
        const { asFragment } = render(<PaymentWidget
            amount="1000"
            seconds={4}
            partnerName="Test"
            />, { store }
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('check confirm functionality with wrong OTP', () => {
        const store = createStore(() => ({ isMatched: false }))
        const { getByText, getByTestId } = render(<PaymentWidget
            amount="1000"
            seconds={4}
            partnerName="Test"
            />, { store }
        );
        const elem = getByText('Confirm');
        fireEvent.click(elem);
        const msg = getByTestId('msg');
        expect(msg.innerHTML).toBe('Invalid OTP number')
    });

    it('check confirm functionality with correct OTP', () => {
        const store = createStore(() => ({ isMatched: true }))
        const { getByText, getByTestId } = render(<PaymentWidget
            amount="1000"
            seconds={4}
            partnerName="Test"
            />, { store }
        );
        const elem = getByText('Confirm');
        fireEvent.click(elem);
        const msg = getByTestId('msg');
        expect(msg.innerHTML).toBe('Valid OTP number')
    });
});