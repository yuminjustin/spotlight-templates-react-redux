import * as TYPES from './types'
import axios from 'axios'

export default {
    get_table: () => async (dispatch, getState) => { /* 获取用户信息 */
        let value = await axios.get('./static/mock/table.json');
        dispatch({
            type: TYPES.GET_TABLE,
            payload: {
                value
            }
        });
    }
}