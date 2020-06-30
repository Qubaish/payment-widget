import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = styled.input`
    width: 25px;
    background: #D1CEC7;
    border: none;
    border-bottom: 1px solid #B9B8B7;
    font-size: 1.6rem;
    text-align: center;
    :focus {
        outline: none;
        border-bottom: 1px solid #307EF7;
    }
`;

function InputField({placeholder, onChange, index}){
    const [state, setState] = useState('');

    const validateInput = val => {
        const number = isNaN(val) ? '' : val;
        return number && number.length > 1 ? number.substr(0, 1) : number;
    }

    const onHandleChange = e => {
        const validateNumber = validateInput(e.target.value);
        setState(validateNumber);
        onChange(validateNumber, index);
    }

    return (
        <Input
            placeholder={placeholder}
            data-testid="input"
            onChange={onHandleChange}
            value={state}
            aria-label="Enter OTP digit"
        />
    );
}

InputField.propTypes = {
    placeholder: PropTypes.string,
};

InputField.defaultProps = {
    placeholder: '0',
}

export default memo(InputField);