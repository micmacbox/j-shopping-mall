import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { QueryClientProvider } from "react-query";
import { getClient } from "./queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import Gnb from "./components/gnb";

const App = () => {
  const elem = useRoutes(routes);
  return (
    <QueryClientProvider client={getClient()}>
      <Gnb />
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
