import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state]; // Создаем новый массив
            sortedState.sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name); // Сортировка по возрастанию
                } else {
                    return b.name.localeCompare(a.name); // Сортировка по убыванию
                }
            });
            return sortedState;
        }
        case 'check': {
            const ageLimit = action.payload;
            return state.filter(el => el.age >= ageLimit); // Фильтрация по возрасту
        }
        default:
            return state;
    }
}

/* 
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const isSort = action.payload
            const newState =  [...state]
            if (isSort === 'up') {
                newState.sort((a, b) => a.name.localeCompare(b.name, 'ru'))
            }
            if (isSort === 'down') {
                newState.sort((b, a) => a.name.localeCompare(b.name, 'ru'))
            }
            state = newState.sort((a, b) => a.name.localeCompare(b.name, 'ru'))
            return newState // need to fix
        }
        case 'check': {
            const numbers = action.payload
            return state.filter(el => el.age < numbers) // need to fix
        }
        default:
            return state
    }
}  */