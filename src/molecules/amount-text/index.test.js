import React from 'react';
import { render } from '@testing-library/react';
import AmountText from './index';

describe('<AmoutText />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<AmountText amount="1000"/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render a amount text component', () => {
        const { getByTestId } = render(<AmountText amount="1000"/>);
        const elem = getByTestId('amount');
        expect(elem.children.length).toBe(2);
    });
});