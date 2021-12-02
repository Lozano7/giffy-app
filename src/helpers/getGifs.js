const getGifs = async (url, setGifs) => {
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  setGifs(gifs);
};

export default getGifs;
