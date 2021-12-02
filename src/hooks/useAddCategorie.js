import { useState } from 'react';

const useAddCategorie = (handleAdd) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      handleAdd(inputValue);
      setInputValue('');
    }
  };

  return { inputValue, handleChange, handleSubmit };
};

export default useAddCategorie;
