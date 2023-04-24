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
        if (pokemonFromDatabase.length > 5){
            return alert("Your Pokemon Team is full. Please release a pokemon to continue.")
        } else {
            const pokemonFromDatabase = await pokemonAPI.createPokemon(newPokemon);
            await pokemonStatsAPI.createPokemonStats(newPokemonStats, pokemonFromDatabase._id)
            setPokemon([...pokemon, pokemonFromDatabase])
            const pokemonFromPokedex = await pokedexAPI.createPokedexEntry(newPokedexEntry)
        }
    }

    async function handleRemovePokemon(pokeId){
        const remainingPokemon = await pokemonAPI.deletePokemon(pokeId)
        setPokemon(remainingPokemon)
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
                <PokemonList pokemon={ pokemon }  handleRemovePokemon={handleRemovePokemon} />
            </div>
        </div>
    )
}
