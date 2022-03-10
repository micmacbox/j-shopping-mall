import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const elem = useRoutes(routes);
  return elem;
  // return <div>왜 속이 쓰리지?</div>;
};

export default App;
