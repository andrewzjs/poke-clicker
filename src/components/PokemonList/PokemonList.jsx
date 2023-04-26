import PokemonListItem from "../PokemonListItem/PokemonListItem";
import './PokemonList.css'

export default function PokemonList ({ pokemon, handleRemovePokemon }) {

    return (
        <>
        <div className="table-container">
          <table>
            <thead>
              {pokemon.length<10 ?
                <th style={{fontWeight:"bold", fontSize: "20px"}}>
                Pokemon Team: {pokemon.length}/10
                </th>
                :
                <th style={{fontWeight:"bold", fontSize: "20px", color:'red'}}>
                Full Team: {pokemon.length}/10
                </th>
                }
            </thead>
            <tbody>
            {pokemon.map((p, index) => (
                <PokemonListItem pokemon={p} key={index} handleRemovePokemon={handleRemovePokemon} />
            ))}
            </tbody>
          </table> 
        </div>
        </>
    )
}
