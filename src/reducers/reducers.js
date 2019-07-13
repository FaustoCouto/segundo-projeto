import { combineReducers } from 'redux'
import { reducersItem } from './reducersItem'
import { reducersItemList } from './reducersItemList'
import { reducersIsEditing } from './reducersIsEditing'

export const reducers = combineReducers({
	ReducersItem: reducersItem,
	ReducersItemList: reducersItemList,
	ReducersIsEditing: reducersIsEditing
})