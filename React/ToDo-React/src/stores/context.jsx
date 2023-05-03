// Importaciones
import { createContext, useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";

// Crear el contexto
const TodoContext = createContext();

// Valores iniciales del localStorage
const initialValue = [
  { text: "Crear un hogar con Lauris", completed: false },
  {
    text: "Ganar una copa de Dúos en Fortnite con la Ratona",
    completed: false,
  },
];

const TodoProvider = (props) => {
  // El "hook" método useState() devuelve un array con dos elementos
  const [search, setSearch] = useState("");
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", initialValue);

  // Creamos un estado para el modal
  const [openModal, setOpenModal] = useState(false);

  // Constantes que se enviarán al componente TodoCounter
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const allTodos = todos.length;

  // Validar si el input no tiene texto y mostrar todos los todos, de lo contrario, filtrarlos
  let searchedTodos = [];
  if (!(search.length >= 1)) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      if (todoText.includes(search.toLowerCase())) {
        return todo;
      }
    });
  }

  // Cambiar el estados de los ToDos
  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  // Eliminar un ToDo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const saveTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        completedTodos,
        allTodos,
        search,
        setSearch,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        saveTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
