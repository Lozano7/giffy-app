import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

const useSetGifs = (url, imagesDefault) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imagesDefault.length > 0) {
      setImages(imagesDefault);
      setLoading(false);
    }
  }, [imagesDefault]);

  useEffect(() => {
    setLoading(true);
    getGifs(url, setImages);
  }, [url]);

  return { images, loading };
};

export default useSetGifs;
