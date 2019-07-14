export const item = (state = { id: '', value: ''}, action) => {
    switch (action.type) {
        case 'UPDATE_ITEM':
            return action.value
        case 'CLEAR_ITEM':
            return { id: '', value: ''}
        default:
            return state
    }
}