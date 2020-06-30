import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
    it('should render a sm button', () => {
        const { getByTestId} = render(<Button type="sm" text='close'/>);
        const elem = getByTestId('btn');
        expect(elem.innerHTML).toBe('close');
    });
    it('should render a lg button', () => {
        const { getByTestId } = render(<Button type="lg" text='submit'/>);
        const elem = getByTestId('btn');
        expect(elem.innerHTML).toBe('submit');

    });
    it('should check css of lg button', () => {
        const { getByTestId } = render(<Button type="lg" text='submit'/>);
        const elem = getByTestId('btn');
        expect(elem).toHaveStyle('color: #fff');
        
    });
    it('should fire an event', () => {
        const { getByTestId, getByText } = render(<Button type="lg" text='event'/>);
        const elem = getByTestId('btn');
        fireEvent.click(getByText("event"));
        expect(elem.innerHTML).toBe('event');
    });
    it('checking snapshot', () => {
        const { asFragment } = render(<Button type="lg" text='event'/>);
        expect(asFragment()).toMatchSnapshot();
    });
});
