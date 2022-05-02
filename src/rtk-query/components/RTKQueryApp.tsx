import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { todoApi } from '../services/todoApi';
import TodoApp from './TodoApp';

function RTKQueryApp() {
  return (
    <ApiProvider api={todoApi}>
      <TodoApp />
    </ApiProvider>
  );
}

export default RTKQueryApp;
