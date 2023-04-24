import { NavLink } from "react-router-dom"

export default function PokemonListItem({pokemon, index, handleRemovePokemon}) {
    return (
        <div>
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
                </td>
              </tr>
        </div>
    )
}