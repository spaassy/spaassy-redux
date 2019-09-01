import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import combineReducers from './combineReducers'
import SpaAsyRegister from '../spaassyRegister'
import Connect from '../spaassyConnect'

class SpaAssyProvider extends React.Component {
    constructor(props) {
        super(props)
        this.store = configureStore(this.props.namespace, { ...this.props.rootReducers })
        if (this.props.mainProject) {
            const spaassyRegister = new SpaAsyRegister()
            spaassyRegister.createUpdataStore((namespace, reducers) => {
                this.store.replaceReducer(combineReducers(namespace, reducers))
            })
            spaassyRegister.addReducerAndNoRegister(this.props.namespace, { ...this.props.rootReducers })
            window.subProject.SpaAssyConnect = Connect
            window.subProject.updataRouter = this.updataRouter.bind(this)
        }

        this.state = {
            updataRouter: false
        }
    }

    updataRouter = () => {
        this.setState({
            updataRouter: !this.updataRouter
        })
    }

    render() {
        console.log(window,'window')
        return (
            <Provider store={this.store}>
                {
                    this.state.updataRouter ?
                        this.props.children : (
                            <span>
                                12312
                                {this.props.children}
                            </span>
                        )
                }
            </Provider>
        )
    }
}

export default SpaAssyProvider