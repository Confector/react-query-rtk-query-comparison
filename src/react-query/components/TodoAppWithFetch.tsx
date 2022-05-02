import React, { useRef } from 'react';
import { useQuery, useMutation } from 'react-query';

import { queryClient } from './ReactQueryApp';
import { Todo } from '../../models/todo.model';
import {
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} from '../services/todoApi-fetch';

function TodoAppWithFetch() {
  const { data: todos } = useQuery<Todo[]>('todos', getTodos, {
    initialData: [],
  });

  const createMutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      textRef.current!.value = '';
    },
  });

  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });

  const textRef = useRef<HTMLInputElement>(null);

  return (
    <div className='App'>
      <h1>React Query with Fetch</h1>
      <div className='todos'>
        {todos?.map((todo) => (
          <React.Fragment key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.done}
                onChange={() => {
                  updateMutation.mutate({ ...todo, done: !todo.done });
                }}
              />
              {todo.text}
            </label>

            <button
              onClick={() => {
                deleteMutation.mutate(todo);
              }}
            >
              Delete
            </button>
          </React.Fragment>
        ))}
        <input type='text' ref={textRef} />
        <button
          onClick={() => {
            createMutation.mutate(textRef.current!.value ?? '');
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default TodoAppWithFetch;
