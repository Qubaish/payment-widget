import React from 'react';
import { render } from '@testing-library/react';
import Text from './index';

describe('<Text />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<Text text="hello"/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render a text', () => {
        const { getByTestId} = render(<Text text="test" size="sm"/>);
        const elem = getByTestId('text');
        expect(elem.innerHTML).toBe('test');
    });
    it('should render a large text', () => {
        const { getByTestId} = render(<Text text="test" size="lg"/>);
        const elem = getByTestId('text');
        expect(elem).toHaveStyle('font-size: 16px');
    });
});