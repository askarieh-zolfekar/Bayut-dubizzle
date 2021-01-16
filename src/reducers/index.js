/**
 * MainApp Reducers
 */
import { combineReducers } from 'redux';
import generalReducer from './GeneralReducer';
import gistsReducer from './GistsReducer';

const reducers = combineReducers({
    generalReducer,
    gistsReducer,
});

export default reducers;
