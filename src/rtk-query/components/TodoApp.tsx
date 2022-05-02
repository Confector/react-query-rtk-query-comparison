import React, { useCallback, useRef } from 'react';
import { todoApi } from '../services/todoApi';
import { Todo } from '../../models/todo.model';

function TodoApp() {
  const { data: todos } = todoApi.useGetAllQuery();
  const [createTodo] = todoApi.useAddTodoMutation();
  const [updateTodo] = todoApi.useUpdateTodoMutation();
  const [deleteTodo] = todoApi.useDeleteTodoMutation();

  const textRef = useRef<HTMLInputElement>(null);
  const onCreate = useCallback(() => {
    createTodo(textRef.current!.value ?? '');
    textRef.current!.value = '';
  }, [createTodo]);

  const onUpdate = useCallback(
    (todo: Todo) => updateTodo({ ...todo, done: !todo.done }),
    [updateTodo]
  );

  const onDelete = useCallback((todo: Todo) => deleteTodo(todo), [deleteTodo]);

  return (
    <div className='App'>
      <h1>RTK Query</h1>
      <div className='todos'>
        {todos?.map((todo) => (
          <React.Fragment key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.done}
                onChange={() => onUpdate(todo)}
              />
              {todo.text}
            </label>
            <button onClick={() => onDelete(todo)}>Delete</button>
          </React.Fragment>
        ))}
        <input type='text' ref={textRef} />
        <button onClick={onCreate}>Create</button>
      </div>
    </div>
  );
}

export default TodoApp;
