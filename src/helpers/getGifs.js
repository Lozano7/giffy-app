const getGifs = async (url, setGifs) => {
  let loading;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      loading = true;
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const { data } = await response.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    setGifs(gifs);
  } catch (error) {
    loading = false;
    console.log(error);
  }
  return loading;
};

export default getGifs;
