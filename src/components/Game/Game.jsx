import './Game.css';
import * as pokemonAPI from '../../utilities/pokemonApi'
import { useState, useEffect } from "react";
import GameBoard from '../GameBoard/GameBoard'
import PokedexList from '../PokedexList/PokedexList'
import PokemonList from '../PokemonList/PokemonList'


export default function Game({ handleAddPokemon }) {
    const [pokemon, setPokemon] = useState([])

    async function handleAddPokemon(newPokemon){
        const pokemonFromDatabase = await pokemonAPI.createPokemon(newPokemon);
        setPokemon([...pokemon, pokemonFromDatabase])
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
        <div className="home-area">
            <div className="gameboard-area">
                <GameBoard handleAddPokemon={handleAddPokemon} />
            </div>
            <div className="pokemonlist-area">
                <PokemonList pokemon={ pokemon } setPokemon={ setPokemon } />
            </div>
        </div>

    )
}
