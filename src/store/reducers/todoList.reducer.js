import { combineReducers } from "redux";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/todoList";

const initialState = [
    {
        text: "go to the shop",
        complete: false
    },
    {
        text: "do homework",
        complete: false
    },
    {
        text: "do sport",
        complete: false
    },
    {
        text: "read books",
        complete: false
    },
]
export const todolist_reducer = (state=initialState,action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.playload,
                    complete: false
                },
            ];

            case TOGGLE_TODO:
                return state.map((todo, id) => {
                    return id === action.playload
                    ?{...todo,complete:!todo.complete}
                    : todo
                });

                case DELETE_TODO:
                    return state.filter((todo, id) => {
                        return id !== action.playload
                    })

                default:
                    return state;
    }
} 