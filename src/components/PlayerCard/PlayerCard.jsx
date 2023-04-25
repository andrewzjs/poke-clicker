import { useEffect, useState } from "react"
import * as pokemonAPI from '../../utilities/pokemonApi'
import PokemonCard from "../PokemonCard/PokemonCard"


export default function PlayerCard({ user }){
    const [pokemons, setPokemons] = useState([])

    useEffect(function() {
        async function getPokemon(){
            const usersPokemon = await pokemonAPI.getUsersPokemon(user._id)
            setPokemons(usersPokemon)
        } 
        getPokemon()
    }, [user._id])

    return (
        <>
            {pokemons.length?
            <div className="card-container">
                <div className="player-card">
                    <h4>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h4>
                    <div className="image-track">
                        {pokemons.map((pokemon, idx) => (
                            <PokemonCard pokemon={pokemon} user={user} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
            :
            <div></div>
            }
        </>
    )
}