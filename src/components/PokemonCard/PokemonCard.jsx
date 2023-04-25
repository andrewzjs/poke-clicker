import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon, user }){
    return(

            <Link to={`/pokemon/${pokemon._id}`}>
                <img className="pokemon-image" src={`${pokemon.sprite2}`} alt="" />
            </Link>

    )
}