import React from 'react';
import styled from 'styled-components';


const StyledMsg = styled.div`
    background: ${props => props.isError ? '#F8D7D9' : '#D3E2F3'};
    height: 50px;
    line-height: 50px;
    color: ${props => props.isError ? '#731C23' : '#609EF4'};
    text-align: left;
    padding-left: 2rem;
    border-radius: 10px;
`;

function Message({textMsg, isError}) {
    return (
        <StyledMsg isError={isError}>{textMsg}</StyledMsg>
    );
}

Message.defaultProps = {
    textMsg: 'Valid OTP number!'
};

export default Message;