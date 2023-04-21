import './Game.css';
import * as pokemonAPI from '../../utilities/pokemonApi'
import * as pokedexAPI from '../../utilities/pokedexApi'
import { useState, useEffect } from "react";
import GameBoard from '../GameBoard/GameBoard'
import PokedexList from '../PokedexList/PokedexList'
import PokemonList from '../PokemonList/PokemonList'


export default function Game({ handleAddPokemon }) {
    const [pokemon, setPokemon] = useState([])

    async function handleAddPokemon(newPokemon, newPokedexEntry){
        const pokemonFromDatabase = await pokemonAPI.createPokemon(newPokemon);
        setPokemon([...pokemon, pokemonFromDatabase])
        const pokemonFromPokedex = await pokedexAPI.createPokedexEntry(newPokedexEntry)
    }

    async function handleRemovePokemon(pokeId){
        const remainingPokemon = await pokemonAPI.deletePokemon(pokeId)
        setPokemon(remainingPokemon)
        console.log('remove pokemon', pokeId)
    }

    useEffect(function() {
        async function getPokemon() {
            const pokemon = await pokemonAPI.getAll()
            setPokemon(pokemon)
        }
        getPokemon()
    }, [])
    
    return (
        <div className="home-area">
            <div className="gameboard-area">
                <GameBoard handleAddPokemon={handleAddPokemon}/>
            </div>
            <div className="pokemonlist-area">
                <PokemonList pokemon={ pokemon } setPokemon={ setPokemon } handleRemovePokemon={handleRemovePokemon} />
            </div>
        </div>

    )
}
