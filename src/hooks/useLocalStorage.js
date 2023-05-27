import { useState, useEffect } from 'react';

function useLocalStorage(nameKey, defaultName) {
  const [storedName, setStoredName] = useState(() => {
    try {
      const savedQuery = JSON.parse(window.localStorage.getItem(nameKey));
      return savedQuery ?? defaultName;
    } catch ({ message }) {
      console.error('Set state error: ', message);
      return defaultName;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(nameKey, JSON.stringify(storedName));
    } catch ({ message }) {
      console.error('Set state error: ', message);
    }
  }, [storedName, nameKey]);

  return [storedName, setStoredName];
}

export { useLocalStorage };
