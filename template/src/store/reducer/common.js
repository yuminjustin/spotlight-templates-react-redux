import {  handleActions } from 'redux-actions';
import * as TYPES from '../actions/types'

const initialState = {
    userInfo: {
        name: ""
    },
    menu:[]
}


export default handleActions({
    [TYPES.GET_USER]: (state, action) => {
        let { data } = action.payload.value
        let params = {  name: data.data.name }

        return Object.assign({}, state, {
            userInfo: params
        });
    },
    [TYPES.GET_MENU]: (state, action) => {
        let { data } = action.payload.value

        return Object.assign({}, state, {
            menu: data.data
        });
    }
}, initialState)