const SET_GOODS = 'SET_GOODS'

export let setAdminGoods = (value) => {
    return({
        type: SET_GOODS,
        value
    })
}

let initialState = {
    goods: [],
    
}

let adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GOODS: {
            return({
                ...state,
                goods: action.value
            })
        }
        default: {
            return({
                ...state
            })
        }
    }
}

export default adminReducer