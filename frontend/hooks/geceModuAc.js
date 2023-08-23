import { useState } from 'react';

export const useInput = (key ,initialValue) => { 
	const [darkMode, setDarkMode] = useLocalStorage(key,initialValue);

	const onClickHandler = () => setDarkMode(!darkMode);

	return [darkMode,setDarkMode,onClickHandler]; 
};

 const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
	  const item = window.localStorage.getItem(key);
	  return item ? JSON.parse(item) : initialValue;
	});
	const setValue = value => {
	  setStoredValue(value);
	  window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [storedValue, setValue];
  };