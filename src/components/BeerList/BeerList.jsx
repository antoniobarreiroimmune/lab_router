import { Link } from 'react-router-dom';
import '../../Style/ButtonStyle.css'

function BeersList({ beers }) {
  return (
    <div className='containerList'>
      <h1>Lista de Cervezas</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer.Name} className='beerList'>
            <Link to={`/beer/${beer.Name.replace(/\s+/g, '_')}`} className="button-link">
              {beer.Name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BeersList;
