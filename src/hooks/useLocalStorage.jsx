import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Obtener el valor almacenado en localStorage cuando el hook se inicializa
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Crear un estado para mantener el valor actual
  const [array, setArray] = useState(initial);

  // Actualizar localStorage cuando el array cambie
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(array));
  }, [key, array]);

  return [array, setArray];
}

export default useLocalStorage;