import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers'
import { timeoutFetchBlocks } from  '../actions/blocksAction'
import {timeoutFetchTransactions} from "../actions/transactionsAction";

export default function configureStore(initialState) {
    const logger = createLogger()
    const middleware = applyMiddleware(promise(), thunk, logger)

    const store = createStore(
        rootReducer,
        initialState,
        middleware
    )

    store.dispatch(timeoutFetchBlocks(1000 * 60 * 10))
    store.dispatch(timeoutFetchTransactions(1000 * 60 * 10))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}