import React from 'react';
import { render } from '@testing-library/react';
import Message from './index';

describe('<Message />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<Message textMsg="hello"/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render a message', () => {
        const { getByTestId} = render(<Message textMsg="test"/>);
        const elem = getByTestId('msg');
        expect(elem.innerHTML).toBe('test');
    });
    it('should error type message', () => {
        const { getByTestId} = render(<Message textMsg="test" isError={true}/>);
        const elem = getByTestId('msg');
        expect(elem).toHaveStyle('background: #F8D7D9');
    });
});