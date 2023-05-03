// Importación del contexto
import { useContext } from "react";
import { TodoContext } from "stores/context";

// Importamos el css
import "./TodoCounter.css";

const TodoCounter = () => {
  const { completedTodos, allTodos, loading } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      {loading
        ? "..."
        : `Has completado ${completedTodos} de ${allTodos} ToDos`}
    </h2>
  );
};

export { TodoCounter };
