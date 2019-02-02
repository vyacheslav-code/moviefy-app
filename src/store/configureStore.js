import {createStore} from 'redux'
import ItemsReducer from '../reducers/items'

export default () => createStore(ItemsReducer);