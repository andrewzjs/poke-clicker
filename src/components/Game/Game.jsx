import './Game.css';
import * as pokemonAPI from '../../utilities/pokemonApi'
import * as pokedexAPI from '../../utilities/pokedexApi'
import * as pokemonStatsAPI from '../../utilities/pokemonStatsApi'
import { useState, useEffect } from "react";
import GameBoard from '../GameBoard/GameBoard'
import PokemonList from '../PokemonList/PokemonList'

export default function Game({ handleAddNewPokemon }) {
    const [pokemon, setPokemon] = useState([])

    async function handleAddNewPokemon(newPokemon, newPokedexEntry, newPokemonStats){
        const pokemonFromDatabase = await pokemonAPI.getAll();
        if (pokemonFromDatabase.length > 10){
            return alert("Your Pokemon Team is full. Please release a pokemon to continue.")
        } else {
            const pokemonFromDatabase = await pokemonAPI.createPokemon(newPokemon);
            const pokemonStatsFromDatabase = await pokemonStatsAPI.createPokemonStats(newPokemonStats, pokemonFromDatabase._id)
            setPokemon([...pokemon, pokemonFromDatabase].reverse())
            const pokemonFromPokedex = await pokedexAPI.createPokedexEntry(newPokedexEntry)
        }
    }

    async function handleRemovePokemon(pokeId, pokeStatsId){
        // const removeStats = await pokemonStatsAPI.deletePokemonStats(pokeStatsId)
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
                <GameBoard handleAddPokemon={handleAddNewPokemon}/>
            </div>
            <div className="pokemonlist-area">
                <PokemonList pokemon={ pokemon } setPokemon={ setPokemon } handleRemovePokemon={handleRemovePokemon} />
            </div>
        </div>
    )
}
