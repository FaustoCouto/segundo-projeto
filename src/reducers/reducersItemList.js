export const itemList = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_ITEM_LIST':
            return action.value
        default:
            return state
    }
}