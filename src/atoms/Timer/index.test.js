import React from 'react';
import { render } from '@testing-library/react';
import Timer from './index';

describe('<Timer />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<Timer seconds={2}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render a text', () => {
        const { getByTestId} = render(<Timer seconds={5}/>);
        const elem = getByTestId('timer');
        expect(elem).toBeTruthy();
    });
    it('should check after timeout show reset btn', () => {
        const { getByTestId} = render(<Timer seconds={1}/>);
        setTimeout(() => {
            const elem = getByTestId('btn');
            expect(elem.innerHTML).toBe('reset');
            expect(component.state().fruits).toEqual(fruits);
        }, 1000);
    });
});