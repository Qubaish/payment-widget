import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SmallText = styled.p`
    font-size: 14px;
    color: #d8d8d8;
    margin: 0;
`;
const LargeText = styled.p`
    font-size: 16px;
    margin: 0;
`;

function Text({text, size}){
    return (
        <Fragment>
            {size === 'sm' && <SmallText>{text}</SmallText>}
            {size === 'lg' && <LargeText>{text}</LargeText>}
        </Fragment>
    );
}

export default Text;