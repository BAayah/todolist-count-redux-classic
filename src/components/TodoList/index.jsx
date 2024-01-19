import React, { useState } from "react"
import { add_todo, toggle_todo, delete_todo } from "../../store/actions/todoList"
import { connect } from "react-redux"
import  TodoItem  from "../TodoItem"
import { bindActionCreators } from "redux"


 const TodoList = ({state,add_todo}) => {

    const[inputValue, setInputValue] = useState([])
    console.log(state);
    return (
        <div>
            <div>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={() => add_todo(inputValue)}>Add</button>
            </div>
            <ul>
                {
                    state.map((todo,id) => {
                        return <TodoItem todo={todo} id={id} key={id} />
                    })
                }
            </ul>
        </div>
    )
}
const mapStatetoProps = state => ({
    state: state.todolist
})

const mapDispatchtoProps = dispatch => {
    return bindActionCreators({
        add_todo,
        toggle_todo,
        delete_todo
    }, dispatch)
}
export default connect(mapStatetoProps, mapDispatchtoProps)(TodoList)