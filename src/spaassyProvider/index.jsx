import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import combineReducers from './combineReducers'
import SpaAsyRegister from '../spaassyRegister'


const SpaAssyProvider = (props) => {
    let store = configureStore(props.namespace, { ...props.rootReducers })
    if (props.mainProject) {
        const spaassyRegister = new SpaAsyRegister()
        spaassyRegister.createUpdataStore((namespace, reducers) => {
            store.replaceReducer(combineReducers(namespace, reducers))
        })
        spaassyRegister.addReducerAndNoRegister(props.namespace, { ...props.rootReducers })
    }
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default SpaAssyProvider