import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

const useGifs = () => {
  const [imagesDefault, setImagesDefault] = useState([]);
  const [categories, setCategories] = useState('');

  const handleAdd = (categorie) => {
    categories.includes(categorie.trim()) || setCategories(categorie);
  };

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=1VWMilfdy4gxehjL7rKPfROdPwv5UbUk`;
    getGifs(url).then((response) => setImagesDefault(response));
  }, []);

  return {
    imagesDefault,
    categories,
    handleAdd,
  };
};

export default useGifs;
