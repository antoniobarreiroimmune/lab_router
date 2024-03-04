import { useParams, Link } from 'react-router-dom';
import '../../Style/ButtonStyle.css'

function BeersDetails({ beers }) {
  let { beerName } = useParams();
  beerName = beerName.replace(/_/g, ' '); 
  const beer = beers.find(b => b.Name === beerName);

  return (
    <div>
      {beer ? (
        <div className='container'>
          <h1>Detalles de la Cerveza: {beer.Name}</h1>
          <img src={beer.Photo} alt={beer.Name} style={{ maxWidth: '200px' }} />
          <p><b>Alcohol:</b> {beer.alcoholByVolume}%</p>
          <p><b>Marca:</b> {beer.Brand}</p>
          <p><b>Descripción:</b> {beer.Description}</p>
          <Link to="/" className="button-link">Volver a la lista</Link>
        </div>
      ) : (
        <p>Cerveza no encontrada</p>
      )}
    </div>
  );
}

export default BeersDetails;