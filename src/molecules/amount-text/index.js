import React from 'react';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import styled from 'styled-components';

const Block = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
`;

function AmountText({amount}){
    return (
        <Block data-testid="amount">
            <Text text={amount} size="lg"/>
            <Button type="sm">close</Button>
        </Block>
    );
}

export default AmountText;