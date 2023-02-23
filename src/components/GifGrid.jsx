import { useFecthGifs } from "../hooks/useFecthGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const {images, isLoading}=useFecthGifs(category)
  // const [images, setimages] = useState([]);
  // useEffect(() => {
  //   //No se debe usar async en useEffect
  //   GetGifs(category).then((newImages) => setimages(newImages));
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando!!!</h2>
      }
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} 
          {...image}/>
        ))}
      </div>
    </>
  );
};

