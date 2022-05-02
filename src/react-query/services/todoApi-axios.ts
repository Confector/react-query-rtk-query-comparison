import axios from 'axios';
import { Todo } from '../../models/todo.model';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getTodos = async () =>
  (await axiosClient.get<Todo[]>('/todos')).data;

export const getTodo = async (id: number) =>
  (await axiosClient.get<Todo[]>(`/todos${id}`)).data;

export const createTodo = async (text: string): Promise<Todo> =>
  axiosClient.post('/todos/', text);

export const updateTodo = async (todo: Todo): Promise<Todo> =>
  axiosClient.put(`/todos/${todo.id}`, todo);

export const deleteTodo = async (todo: Todo): Promise<Todo> =>
  axiosClient.delete(`/todos/${todo.id}`);
