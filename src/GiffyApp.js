import 'animate.css';
import AddCategorie from './components/AddCategorie';
import GifGrid from './components/GifGrid/GifGrid';
import useFetchGifsDefault from './hooks/useFetchGifsDefault';

const GiffyApp = () => {
  const { imagesDefault, categories, handleAdd } = useFetchGifsDefault();

  return (
    <div>
      <h1 className='animate__animated animate__bounce'>Giffy</h1>
      <AddCategorie handleAdd={handleAdd} />
      <GifGrid categories={categories} imagesDefault={imagesDefault} />
    </div>
  );
};

export default GiffyApp;
