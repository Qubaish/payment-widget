import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from './index';

describe('<InputField />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<InputField placeholder="0" onChange={jest.fn()}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render a InputField', () => {
        const { getByTestId} = render(<InputField placeholder="0" onChange={jest.fn()}/>);
        const elem = getByTestId('input');
        expect(elem.placeholder).toBe('0');
    });
    it('should check onChange functionality', () => {
        const { getByTestId} = render(<InputField placeholder="0" onChange={jest.fn()}/>);
        const elem = getByTestId('input');
        fireEvent.change(elem, {target: {value: '5'}});
        expect(elem.value).toBe('5');
    });
    it('should check input should be integer', () => {
        const { getByTestId} = render(<InputField placeholder="0" onChange={jest.fn()}/>);
        const elem = getByTestId('input');
        fireEvent.change(elem, {target: {value: 'S'}});
        expect(elem.value).toBe('');
    });
});
