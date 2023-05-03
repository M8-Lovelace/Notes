// Importamos useState de React
import { useEffect, useState } from "react";

// Creamos una función que recibe como parámetro el nombre de la key
const useLocalStorage = (key, initialValue) => {
  // Creamos un estado usando el useState y le pasamos el valor del localStorage
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Simulamos que hacemos una petición a una API, el useEffect solo se ejecutará 1 vez por el arreglo vacío, ya que no tiene dependencias
  useEffect(() => {
    setTimeout(() => {
      try {
        // Obtenemos el valor del localStorage, si no existe, se le asigna el valor inicial
        let localStorageItem =
          JSON.parse(localStorage.getItem(key)) ?? initialValue;

        // Si el localStorageItem existe pero está vacio, volvemos a asignar su valor inicial
        if (!localStorageItem.length) {
          localStorage.setItem(key, JSON.stringify(initialValue));
        } else {
          // Guardamos el valor del localStorage en el estado
          setItem(localStorageItem);
        }
        setLoading(false);
      } catch (error) {
        // Si existe un error lo guardamos en el estado para mostrarlo en el componente
        setError(true);
      }
    }, 2000);
  }, []);

  // Creamos una función que recibirá el nuevo valor del estado y lo guardará en el localStorage
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(key, stringifiedItem);
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
};

// Exportamos la función
export { useLocalStorage };
