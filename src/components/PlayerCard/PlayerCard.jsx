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
    }, [])
    
    return (
        <>
            <h1>
                {user.name}
            </h1>
            <div>
                POkemon: 
                {pokemons.map((pokemon, idx) => (
                    <PokemonCard pokemon={pokemon} />
                ))}
            </div>
        </>
    )
}