const SET_CURRENT = 'SET_CURRENT'

export let setCurrent = (value) => {
    return({
        type: SET_CURRENT,
        value
    })
}


let initialState = {
    current: {
        name: 'Все товары',
        id: -1
    }
}

let catalogReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT: {
            return({
                ...state,
                current: action.value
            })
        }
        default: {
            return({
                ...state
            })
        }
    }
}

export default catalogReducer