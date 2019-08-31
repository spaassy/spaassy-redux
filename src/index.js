import bindActionCreators from './reduxUtils/bindActionCreators'
import combineReducers from './reduxUtils/combineReducers'

import createReducer from './createReducer'
import promiseMiddleware from './reduxPromiseMiddleware'

import AsyncComponent from './asyncComponent'
import SpaAssyProvider from './spaassyProvider'
import SpaAssyConnect from './spaassyConnect'
import SpaAssyRegister from './spaassyRegister'

module.exports = {
    bindActionCreators,
    combineReducers,
    createReducer,
    promiseMiddleware,

    AsyncComponent,
    SpaAssyProvider,
    SpaAssyConnect,
    SpaAssyRegister
}