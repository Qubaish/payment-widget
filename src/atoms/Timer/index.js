import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTimer = styled.span`
    color: #307EF7;
    align-self: flex-end;
    padding: 5px;
`;

const Link = styled.button`
    color: #307EF7;
    background: none;
    border: none;
    pointer: cursor;
    align-self: flex-end;
    padding: 5px;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;

function Timer({seconds}) {
    const [counter, setCounter] = useState(seconds);
  
    useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);

    const resetTimer = () => setCounter(seconds);
  
    return (
        <Fragment>
            {counter > 0 && (<StyledTimer data-testid="timer">00:{counter}</StyledTimer>)}
            {counter === 0 && (<Link onClick={resetTimer} data-testid="btn">reset</Link>)}
        </Fragment>
    );
}

Timer.propTypes = {
    seconds: PropTypes.number,
}

Timer.defaultProps = {
    seconds: 10,
}

export default Timer;
