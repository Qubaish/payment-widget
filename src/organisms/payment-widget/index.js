import React, { useState } from 'react';
import { connect } from 'react-redux'
import WidgetHeader from '../../molecules/widget-header';
import AmountText from '../../molecules/amount-text';
import InputField from '../../atoms/InputField';
import Timer from '../../atoms/Timer';
import Button from '../../atoms/Button';
import Message from '../../atoms/Message';
import { matchOTP } from '../../store';
import { WidgetBlock, Section, TimerBlock, TimerContainer, WidgetContainer} from './styled';

const sucessMsg = 'Valid OTP number';
const failureMsg = 'Invalid OTP number';
const maxInputFeilds = 6;

function PaymentWidegt({amount, seconds, partnerName, isMatched, dispatch}){
    
    const [otpState, setOtpState] = useState({});

    const onHandleChange = (number, index) => setOtpState(Object.assign({}, otpState, {[index]: number}));

    const confirmOtp = () => dispatch(matchOTP(Number(Object.values(otpState).join(''))));

    return (
        <Section>
            <WidgetContainer>
                <WidgetBlock>
                    <WidgetHeader partnerName={partnerName}/>
                    <AmountText amount={amount}/>
                </WidgetBlock>
                {isMatched !== undefined && <Message isError={!isMatched} textMsg={isMatched ? sucessMsg : failureMsg}/>}
            </WidgetContainer>
            <TimerContainer>
                <TimerBlock>
                {[...Array(maxInputFeilds)].map((x, i) => (
                    <InputField
                        key={i}
                        index={i}
                        onChange={onHandleChange}
                    />
                ))}
                </TimerBlock>
            <Timer seconds={seconds}/>
            <Button
                text="Confirm"
                type="lg"
                style={{marginTop: 'auto'}}
                onClick={confirmOtp}
            />
            </TimerContainer>
        </Section>
    );
};

export default connect(state => ({ isMatched: state.isMatched }))(PaymentWidegt);