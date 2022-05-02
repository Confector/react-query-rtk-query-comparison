import { Todo } from '../../models/todo.model';

export const BASE_URL = 'http://localhost:8000';

export const getTodos = async (): Promise<Todo[]> =>
  fetch(`${BASE_URL}/todos/`).then((res) => res.json());

export const getTodo = async (id: number): Promise<Todo> =>
  fetch(`${BASE_URL}/todos/${id}`).then((res) => res.json());

export const createTodo = async (text: string): Promise<Todo> =>
  fetch(`${BASE_URL}/todos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
    }),
  }).then((res) => res.json());

export const updateTodo = async (todo: Todo): Promise<Todo> =>
  fetch(`${BASE_URL}/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());

export const deleteTodo = async (todo: Todo): Promise<Todo> =>
  fetch(`${BASE_URL}/todos/${todo.id}`, {
    method: 'DELETE',
  }).then(() => todo);
