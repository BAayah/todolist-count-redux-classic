import { combineReducers } from "redux";
import { todolist_reducer } from "./todoList.reducer";
import { counterReducer } from "./counter.reducer";


export default combineReducers({
    todolist: todolist_reducer,
    counter: counterReducer
})