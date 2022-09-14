const SET_CATEGORIES = 'SET_CATEGORIES'

export let setCategories = (value) => {
    return ({
        type: SET_CATEGORIES,
        value
    })
}

let initialState = {
    list: [
    ]
}

let categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CATEGORIES: {
            // console.log(action.value)
            return ({
                ...state,
                list: [...action.value]
            })
        }
        default: {
            return (
                { ...state }
            )
        }
    }
}

export default categoryReducer