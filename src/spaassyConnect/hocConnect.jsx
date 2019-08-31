import { connect } from 'react-redux'
import bindActionCreators from '../reduxUtils/bindActionCreators'

export default (namespace) => {
    return (stateKey, action) => connect(
        ostate => {
            let state = Object.assign({}, ostate[namespace])
            if (typeof stateKey == 'function') {
                return stateKey(state)
            }
            let s = {}
            if (stateKey instanceof Array) {
                stateKey.forEach(k => s[k] = state[k])
            } else {
                s = state[stateKey]
            }
            return s
        },
        dispatch => {
            let a = {}
            if (!action) {
                return a
            }
            if (action instanceof Array && action.length === 0) {
                return a
            }
            if (typeof action == 'function') {
                a = bindActionCreators(action, dispatch, namespace)
            } else if (action instanceof Array) {
                console.log('The action arguments pass error, Don\t use array, please use object, eg. {addTab: function(){},removeTab:function(){}}')
            } else {
                Object.keys(action).map(key => {
                    a[key] = bindActionCreators(action[key], dispatch, namespace)
                })
            }
            return a
        }
    )
}