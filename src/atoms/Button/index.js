import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${props => props.type === 'sm' ? '50px' : '100%'};
    background: ${props => props.type === 'sm' ? '#F5F5F5' : '#307EF7'};
    border: ${props => props.type === 'sm' ? '1px solid #999' : '1px solid #307EF7'};
    border-radius: 10px;
    height: ${props => props.type === 'lg' ? '30px' : 'auto'};
    color: ${props => props.type === 'sm' ? '#999' : '#fff'};
    cursor: pointer;
    :focus {
        outline: none;
    }
`;

function Button({text, type, onClick, style}) {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            data-testid="btn"
            aria-label={`${text} button`}
            style={style}
        >
            {text}
        </StyledButton>
    );
};

Button.prototype = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['sm', 'lg']),
    text: PropTypes.string,
};

Button.defaultProps = {
    type: 'sm',
    text: 'close'
};

export default Button;