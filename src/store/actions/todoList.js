export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const add_todo = (text) => ({
    type: ADD_TODO,
    playload: text
})

export const toggle_todo = (id) => ({
    type: TOGGLE_TODO,
    playload: id
})

export const delete_todo = (id) => ({
    type: DELETE_TODO,
    playload:  id
})