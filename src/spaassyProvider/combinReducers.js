import combineReducers from '../reduxUtils/combineReducers'


export default (namespace, rootReducers) => (combineReducers({
    [namespace]: {
        ...rootReducers
    }
}))