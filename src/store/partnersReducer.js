let initialState = {
    list: [
        {
            id: 0,
            name: 'Касторама',
            image: 'Castorama'
        },
        {
            id: 0,
            name: '',
            image: 'Mile'
        },
        {
            id: 0,
            name: '',
            image: 'Oma.by'
        },
        {
            id: 0,
            name: '',
            image: 'Апельсин стройматериалы'
        },
        {
            id: 0,
            name: '',
            image: 'Бауцентр'
        },
        {
            id: 0,
            name: '',
            image: 'Деревяшка'
        },
        {
            id: 0,
            name: '',
            image: 'Интердекор'
        },
        {
            id: 0,
            name: '',
            image: 'леруа мерлен'
        },
        {
            id: 0,
            name: '',
            image: 'Мегастрой'
        },
        {
            id: 0,
            name: '',
            image: 'Мегастрой (Казань)'
        },
        {
            id: 0,
            name: '',
            image: 'Мир дерева'
        },
        {
            id: 0,
            name: '',
            image: 'Стройпарк'
        },
        {
            id: 0,
            name: '',
            image: 'Тайга'
        }
    ]
}

let partnersReducer = (state = initialState, action) => {

    switch (action.type) {
        default: {
            return (
                { ...state }
            )
        }
    }
}

export default partnersReducer