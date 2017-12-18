import {  handleActions } from 'redux-actions';
import * as TYPES from '../actions/types'

const initialState = {
    tables: []
}


export default handleActions({
    [TYPES.GET_TABLE]: (state, action) => {
        let { data } = action.payload.value
        
        return Object.assign({}, state, {
            tables: data.data 
        });
    }
}, initialState)