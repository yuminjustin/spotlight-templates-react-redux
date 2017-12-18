import * as TYPES from './types'
import axios from 'axios'

export default {
    get_user: () => async (dispatch, getState) => { /* 获取用户信息 */
        let value = await axios.get('./static/mock/user.json');
        dispatch({
            type: TYPES.GET_USER,
            payload: {
                value
            }
        });
    },
    get_menu: () => async (dispatch, getState) => { /* 获取菜单 */
        let value = await axios.get('./static/mock/menu.json');
        dispatch({
            type: TYPES.GET_MENU,
            payload: {
                value
            }
        });
    }
}