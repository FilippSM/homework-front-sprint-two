type LoadingState = {
    isLoading: boolean;
};

const initState: LoadingState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: any): LoadingState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {
                ...state, // Сохраняем предыдущее состояние
                isLoading: action.isLoading, // Обновляем isLoading
            };
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
