import { combineReducers, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import common from './common'
import list from './testlist'

const rootReducer = combineReducers({
	common,
	list
})
/* store Maker */
const store = createStore(
	rootReducer,
	applyMiddleware(promise, thunk)
)

/*  fix  <Provider> does not support changing `store` on the fly  */
/* If change reducer page will be reload*/
if (module.hot) {
	/* regist your reducer here (file name)*/
	let reducers = ['common', 'testlist'];

	reducers.map((f) => {
		module.hot.accept('../reducer/' + f, () => {
			const nextRootReducer = require('../reducer/index');
			store.replaceReducer(nextRootReducer);
		});
	});
}

export default store