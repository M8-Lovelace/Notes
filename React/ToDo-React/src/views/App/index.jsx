// Importaciones
import { TodoProvider } from "stores/context";
import { AppUI } from "views/AppUI";

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export { App };
