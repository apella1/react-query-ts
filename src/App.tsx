import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">Tanstack React Query</div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
