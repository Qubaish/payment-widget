import React from 'react';
import { render } from '@testing-library/react';
import InputField from './index';

describe('<InputField />', () => {
    it('should render a InputField', () => {
        const { getByTestId} = render(<InputField placeholder="0"/>);
        const elem = getByTestId('input');
        expect(elem.placeholder).toBe('0');
    });
});
