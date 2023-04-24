import { Link } from 'react-router-dom';


export default function PokemonListItem({pokemon, index, handleRemovePokemon}) {
    return (
        <div>
            <tr>
                <td className="sprite-table" style={{
                    backgroundImage: `url(${pokemon.sprite})`, 
                    backgroundRepeat: "no-repeat",
                    width: "40%",
                    // animation: "updown 3s infinite",  
                    }}></td>
                <td className="pokemon-name-table">{pokemon.name}</td>
                <td>
                  <Link to={`/pokemon/${pokemon._id}`} className="button-table" > Details </Link>
                  <button className="button-table" onClick={()=>handleRemovePokemon(pokemon._id)}> Release </button>
                </td>
              </tr>
        </div>
    )
}