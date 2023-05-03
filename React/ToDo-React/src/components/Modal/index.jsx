// Importamos el createPortal para crear un portal en React
import { createPortal } from "react-dom";

// Estilos del Modal
import "./Modal.css";

const Modal = ({ children }) => {
  // Recibe dos argumentos, el children que mostrará cualquier contenido en el modal que se le envie, "como componentes o elementos html persé", y el segundo es el elemento donde se renderizará ese children
  return createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };
