// Importaciones
import { useContext } from "react";
import { TodoContext } from "stores/context";

// Estilos
import "./TodoSearch.css";

const TodoSearch = () => {
  const { search, setSearch } = useContext(TodoContext);

  // Por medio de la función onWrite seteamos el estado del contexto
  const onWrite = (event) => {
    setSearch(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      type="text"
      value={search}
      placeholder="Nuevo ToDo..."
      onChange={(event) => onWrite(event)}
    />
  );
};

export { TodoSearch };
