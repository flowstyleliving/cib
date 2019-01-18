import { combineReducers } from 'redux';
import fReducer from './fReducer';

export default combineReducers({
    feeling: fReducer
});