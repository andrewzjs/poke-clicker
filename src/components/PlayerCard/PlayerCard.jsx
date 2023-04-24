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
        <div className="table-div">
            <table className="player-card">
                <thead className="user-name">
                    <tr>
                        <th colspan="3"><h4>{user.name}'s Pokemon</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        {pokemons.map((pokemon, idx) => (
                        <PokemonCard pokemon={pokemon} />
                    ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}