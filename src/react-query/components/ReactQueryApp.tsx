import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import TodoAppWithAxios from './TodoAppWithAxios';
import TodoAppWithFetch from './TodoAppWithFetch';

export const queryClient = new QueryClient();

function ReactQueryApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoAppWithAxios />
      <TodoAppWithFetch />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default ReactQueryApp;
