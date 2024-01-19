import React from 'react'
import { delete_todo, toggle_todo } from '../../store/actions/todoList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export const TodoItem = ({todo,toggle_todo,delete_todo,id}) => {
  return (
    <div className="main" style={{textDecoration: todo.complete ? "line-through" : "none"}}>
      <span>
        {todo.text}
      </span>
      <button onClick={() => toggle_todo(id)}>complete</button>
      <button onClick={() => delete_todo(id)}>delete</button>
    </div>
  )
}

const mapDispatchtoProps = dispatch => ({    
        toggle_todo: (id) => dispatch(toggle_todo(id)),
        delete_todo: (id) => dispatch(delete_todo(id))
    })


export default connect(null,mapDispatchtoProps)(TodoItem)
