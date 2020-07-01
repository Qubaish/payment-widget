import React, { Fragment } from 'react';
import Text from '../../atoms/Text';
import { Img, TextWrapper, Block, Hr } from './styled';

function WidgetHeader({partnerName}){
    return(
        <Fragment>
            <Block>
                <Img
                    name="Business Logo"
                    src="https://static-exp1.licdn.com/sc/h/79m1qiu8wnezlizb5zn646ata" />
                <TextWrapper>
                    <Text text="PAYMENT FOR" size="sm"/>
                    <Text text={partnerName} size="lg"/>
                </TextWrapper>
            </Block>
            <Hr />
        </Fragment>
    );
}

export default WidgetHeader;