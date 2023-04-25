<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './PokemonListItem.css'

=======
import { NavLink } from "react-router-dom"
>>>>>>> 0d34acb344750c6cd870da9c6d5c3ff04cb06fba

export default function PokemonListItem({pokemon, index, handleRemovePokemon}) {
    return (
        <div>
<<<<<<< HEAD
            <tr className="list-row">
                <td><img src={pokemon.sprite1} /></td>
                <td id="pokemon-name-table">{pokemon.name}</td>
                <td>
                  <Link to={`/pokemon/${pokemon._id}`} id="details-button" > Details </Link>
                  <button id="button-table" onClick={()=>handleRemovePokemon(pokemon._id)}> Release </button>
=======
            <tr>
                <td className="sprite-table" style={{
                    backgroundImage: `url(${pokemon.sprite})`, 
                    backgroundRepeat: "no-repeat",
                    width: "40%",
                    }}></td>
                <td className="pokemon-name-table">{pokemon.name}</td>
                <td>
                    <NavLink to={`${pokemon._id}`}>
                        <button className="button-table" > Details </button>
                    </NavLink>
                    <button className="button-table" onClick={()=>handleRemovePokemon(pokemon._id)}> Release </button>
>>>>>>> 0d34acb344750c6cd870da9c6d5c3ff04cb06fba
                </td>
              </tr>
        </div>
    )
}