import {
    createStore,
    applyMiddleware
} from 'redux'

import promiseMiddleware from '../reduxPromiseMiddleware'
import rootReducer from './combinReducers'

export default function configureStore(name, reducers, initialState) {
    const store = createStore(
        rootReducer(name, reducers),
        initialState,
        applyMiddleware(
            promiseMiddleware
        )
    )
    return store
}