import propTypes from 'prop-types';
import React from 'react';
import useAddCategorie from '../hooks/useAddCategorie';

const AddCategorie = ({ handleAdd }) => {
  const { inputValue, handleSubmit, handleChange } = useAddCategorie(handleAdd);
  return (
    <form action='' onSubmit={handleSubmit}>
      <input
        type='search'
        value={inputValue}
        onChange={handleChange}
        placeholder='Search...'
      />
    </form>
  );
};

AddCategorie.propTypes = {
  handleAdd: propTypes.func.isRequired,
};

export default AddCategorie;
