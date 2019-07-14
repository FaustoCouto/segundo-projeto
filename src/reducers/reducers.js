import { combineReducers } from 'redux'
import { item } from './reducersItem'
import { itemList } from './reducersItemList'
import { isEditing } from './reducersIsEditing'

export const reducers = combineReducers({
	ReducersItem: item,
	ReducersItemList: itemList,
	ReducersIsEditing: isEditing
})