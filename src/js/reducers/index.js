
import { combineReducers } from 'redux'
import counterReducer from './counterReducer';
import postsReducer from './postsReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    counterReducer,
    postsReducer,
    todoReducer
})

export default rootReducer;


