import useSetGifs from '../../hooks/useSetGifs';
import Card from './../Card/Card';
import Loading from './../Loading/Loading';
import './GifGrid.css';

const GifGrid = ({ categories, imagesDefault }) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${categories}&limit=20&api_key=1VWMilfdy4gxehjL7rKPfROdPwv5UbUk`;

  const { images, loading } = useSetGifs(url, imagesDefault);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='grid'>
          {console.log(images)}
          {images.map((img) => (
            <Card key={img.id} src={img.url} title={img.title} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
