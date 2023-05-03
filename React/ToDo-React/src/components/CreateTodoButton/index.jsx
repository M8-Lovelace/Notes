// Importaciones
import { useContext } from "react";
import { TodoContext } from "stores/context";

// Estilos
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const onClickButton = () => {
    // Podemos enviarle el valor directamente
    // setOpenModal(!openModal);
    // Podemos obtener el valor actual y el valor nuevo por medio de una función
    setOpenModal((prevOpenModal) => !prevOpenModal);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};

export { CreateTodoButton };
