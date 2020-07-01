import React from 'react';
import { render } from '@testing-library/react';
import WidgetHeader from './index';

describe('<AmoutText />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<WidgetHeader partnerName="Business"/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render a image', () => {
        const { getByTestId } = render(<WidgetHeader partnerName="Business"/>);
        const elem = getByTestId('img');
        expect(elem.name).toBe('Business Logo');
    });
});