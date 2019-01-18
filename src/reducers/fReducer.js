import { FEELING_SELECTED } from  '../actions/types';

const initialState = {
    cycleFeelings: ['hi']
}


export default function fnReducer(state = initialState, action) {
    console.log('first!', state)
    switch(action.type) {
        case FEELING_SELECTED:
            console.log('>>> initial state', state);
            
            state.cycleFeelings = state.cycleFeelings.concat(action.payload);
            console.log('fReducer: state.cycleFeelings', state.cycleFeelings)
        default:
            return state;
    } 
}