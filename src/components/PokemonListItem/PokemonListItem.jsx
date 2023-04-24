import { Link } from 'react-router-dom';
import './PokemonListItem.css'


export default function PokemonListItem({pokemon, index, handleRemovePokemon}) {
    return (
        <div>
            <tr>
                <td><img src={pokemon.sprite1} /></td>
                <td id="pokemon-name-table">{pokemon.name}</td>
                <td>
                  <Link to={`/pokemon/${pokemon._id}`} id="details-button" > Details </Link>
                  <button id="button-table" onClick={()=>handleRemovePokemon(pokemon._id)}> Release </button>
                </td>
              </tr>
        </div>
    )
}