import styled from 'styled-components';

export const WidgetBlock = styled.div`
    padding: 2rem;
`;

export const WidgetContainer = styled.div`
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background: #fff;
`;

export const Section = styled.section`
    background: #D1CEC7;
    width: 30%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    @media only screen and (max-width: 768px) { 
        width: 100%;
    }
`;

export const TimerBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    padding: 2rem;
`;