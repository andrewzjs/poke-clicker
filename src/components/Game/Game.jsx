import './Game.css';
import * as pokemonAPI from '../../utilities/pokemonApi'
import { useState, useEffect } from "react";
import GameBoard from '../GameBoard/GameBoard'
import PokemonList from '../PokemonList/PokemonList'

export default function Game({ handleAddPokemon }) {
    const [pokemon, setPokemon] = useState([])

    async function handleAddPokemon(newPokemon){
        const pokemon = await pokemonAPI.createPokemon(newPokemon);
        setPokemon(pokemon)
    }

    useEffect(function() {
        async function getPokemon() {
            const pokemon = await pokemonAPI.getAll()
            setPokemon(pokemon)
        }
        getPokemon()
        console.log('use effect happening')
    }, [])
    
    return (
        <>
            <button class="button"> grassy terrain</button>
            <GameBoard handleAddPokemon={handleAddPokemon} />
            <div>
                <PokemonList pokemon={ pokemon } setPokemon={ setPokemon } />
            </div>
        </>
    )
}
