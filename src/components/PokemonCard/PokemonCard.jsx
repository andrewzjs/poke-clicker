import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon, user }){
    return(
        <td className="pokemon-card">
            <Link to={`/pokemon/${pokemon._id}`}>
                <img className="pokemon-button" src={`${pokemon.sprite2}`} alt="" />
            </Link>
        </td>
    )
}