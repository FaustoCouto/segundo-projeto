export const isEditing = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_IS_EDITING':
            return action.isEditing
        default:
            return state
    }
}