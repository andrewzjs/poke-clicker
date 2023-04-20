import './GameBoard.css';
import { useState } from "react";
import axios from 'axios';

export default function GameBoard({ handleAddPokemon }) {

    function getRndInteger() {
        return Math.floor(Math.random() * 150 ) + 1;
    }

    async function generatePokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRndInteger()}`)
            const name = response.data.name
            const sprite  = response.data.sprites.front_default
            const pokemonType=[]
            const ability = response.data.abilities[0].ability.name
            const moveDetails = []
            if (response.data.types.length > 1) {
                pokemonType.push(response.data.types[0].type.name)
                pokemonType.push(response.data.types[1].type.name)
            } else {
                pokemonType.push(response.data.types[0].type.name)
            }

            let i = 0
            let moveArray=[]
            while (i<4) {
                var move = response.data.moves[Math.floor(Math.random()*response.data.moves.length)]
                if(!moveArray.includes(move.move)){
                    moveArray.push(move.move)
                }
                i++
            }
            for (move of moveArray) {
                const movesResponse = await axios.get(`${move.url}`)
                moveDetails.push(
                {
                    move: movesResponse.data.name,
                    power: movesResponse.data.power,
                    accuracy: movesResponse.data.accuracy,
                    moveType: movesResponse.data.type.name,
                })
            }
            const newPokemon = {
                name: name,
                sprite: sprite,
                pokemonType: pokemonType,
                ability: ability,
                moves: moveDetails
            }
            handleAddPokemon(newPokemon)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
        <div className = "container">
            <p style={{visibility : "hidden"}}>board</p>
            <div id="board-sprite"></div>
            <div id="pokemon1"  onClick={() => generatePokemon()}>
            </div>
        </div>
        </>
    )
}