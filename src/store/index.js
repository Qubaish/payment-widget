import { createStore } from 'redux'

const initialState = {
    otp: 123456, // can get from api or env
    isMatched: undefined,
}

// Store
export const store = createStore(OTP, initialState);
 
// Reducer
function OTP(state = [], action) {
    switch (action.type) {
        case 'MATCH_OTP':
        return Object.assign({}, state, {
            isMatched: state.otp === action.otp
        });
        default:
        return state;
    }
}

// Action
export const matchOTP = otp => {
    return {
      type: 'MATCH_OTP',
      otp
    }
}

// Action to set OTP in store from api or any other source for future reference
export const setOTP = otp => {
    return {
      type: 'SET_OTP',
      otp
    }
}
