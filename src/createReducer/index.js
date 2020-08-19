const createReducer = (initialparams, reducerMap) => {
    return (params = initialparams, action) => {
        const reducer = reducerMap[action.type]

        if (!action.error && action.payload && action.payload.code && action.payload.code != '0') {
            if (params.get('loading')) {
                return params.set('loading', false)
            } else {
                return params
            }
        }

        return reducer ? reducer(params, typeof action.payload !== 'undefined' ? action.payload : {}, action.params) : params
    }
}

export default createReducer
