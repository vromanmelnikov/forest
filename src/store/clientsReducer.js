const SET_CLIENT_LIST = 'SET_CLIENT_LIST'

export let setClientsList = (value) => {
    return({
        type: SET_CLIENT_LIST,
        value
    })
}


let initialState = {
    list: [
    ]
}

let clientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CLIENT_LIST: {
            return({
                ...state,
                list: action.value
            })
        }
        default: {
            return({
                ...state
            })
        }
    }
}

export default clientsReducer