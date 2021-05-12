
export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_CHANGE_THEME':
            return {
                ...state,
                typeTheme: payload,
            }

        default:
            return state
    }
}
