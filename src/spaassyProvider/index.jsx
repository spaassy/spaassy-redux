import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import combineReducers from '../reduxUtils/combineReducers'
import SpaAsyRegister from '../spaassyRegister'

import rootReducers from '../../../src/store'

const SpaAssyProvider = (props) => {
    let store = configureStore(props.namespace, { ...rootReducers })
    if (props.mainProject) {
        const spaassyRegister = new SpaAsyRegister()
        spaassyRegister.createUpdataStore((namespace, reducers) => {
            store.replaceReducer(combinReducers(namespace, reducers))
        })
        spaassyRegister.addReducerAndNoRegister(props.namespace, { ...rootReducers })
    }
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default SpaAssyProvider