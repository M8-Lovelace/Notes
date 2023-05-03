// Importaciones
import { useContext, useState } from "react";
import { TodoContext } from "stores/context";

// Importaciones de CSS
import "./TodoForm.css";

const TodoForm = () => {
  // Estado para el text area
  const [newTodo, setNewTodo] = useState("");

  // Obtenemos los valores del contexto
  const { setOpenModal, saveTodo } = useContext(TodoContext);

  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };

  // Función que se ejecuta cuando el evento onChange del text area se dispara
  const onChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Código para enviar la información
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodo.length <= 0) {
      alert("El nombre está vacío, escribe algo");
      return;
    }
    saveTodo(newTodo);
    setOpenModal(false);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        onChange={(event) => onChange(event)}
        value={newTodo}
        placeholder="Crea una nueva tarea!"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir ToDo
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
