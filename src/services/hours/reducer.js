

export const reducer = (state, { type, payload }) => {
    switch (type) {
        
    case 'SETHOURSEXTRAS':
        return { ...state, ...payload }

    default:
        return state
    }
}
