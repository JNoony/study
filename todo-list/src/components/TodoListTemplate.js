import React from 'react';
// import Palette from './Palette';
import './TodoListTemplate.css';

const TodoListTemplate = ({form,children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">to-do</div>
            {/* <div className="color">
                <Palette  />
            </div> */}
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;