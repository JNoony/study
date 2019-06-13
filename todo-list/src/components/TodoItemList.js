import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  // 컴포넌트 라이프사이클중 shouldComponentUpdate는 리렌더링 할지 말지 정해줌.
  // todos의 값이 바뀔때만 렌더링 해주면 괴는거라 this.props.todos 와 nextProps.todos 비교해서 다를때만 렌더링
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }  
  
  render() {
      const { todos, onToggle, onRemove } = this.props;
      
      const todoList = todos.map(
        ({id, text, checked}) => (
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
          />
        )
      )

      return (
        <div>
            {todoList}
        </div>
      );
    }
}

export default TodoItemList;