import './Game.css';
import * as pokemonAPI from '../../utilities/pokemonApi'
import * as pokedexAPI from '../../utilities/pokedexApi'
import * as pokemonStatsAPI from '../../utilities/pokemonStatsApi'
import { useState, useEffect } from "react";
import GameBoard from '../GameBoard/GameBoard'
import PokemonList from '../PokemonList/PokemonList'
import img1 from '../../images/env-1.png'
import img2 from '../../images/env-2.png'
import img3 from '../../images/env-3.png'
import img4 from '../../images/env-4.png'


export default function Game({ handleAddNewPokemon }) {
    const [pokemon, setPokemon] = useState([])
    const [background, setBackground] = useState(img1)

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

    async function handleChangeBackground1(){
        setBackground(img1)
    }

    async function handleChangeBackground2(){
        setBackground(img2)
    }

    async function handleChangeBackground3(){
        setBackground(img3)
    }

    async function handleChangeBackground4(){
        setBackground(img4)
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
                <div className="env-toggle">
                    <button id="env1" onClick={() => handleChangeBackground1()}>Grassy Terrain</button>
                    <button id="env2" onClick={() => handleChangeBackground2()}>Stratosphere</button>
                    <button id="env3" onClick={() => handleChangeBackground3()}>Distortion World</button>
                    <button id="env4" onClick={() => handleChangeBackground4()}>Sapphire Sea</button>
                </div>
                <GameBoard 
                background={ background } 
                handleChangeBackground1={handleChangeBackground1}
                handleChangeBackground2={handleChangeBackground2}
                handleChangeBackground3={handleChangeBackground3}
                handleChangeBackground4={handleChangeBackground4} 
                handleAddPokemon={handleAddNewPokemon}/>
            </div>
            <div className="pokemonlist-area">
                <PokemonList pokemon={ pokemon } setPokemon={ setPokemon } handleRemovePokemon={handleRemovePokemon} />
            </div>
        </div>
    )
}
