import './GameBoard.css';
import { useState } from "react";
import axios from 'axios';

export default function Game({user, setUser}) {

    function getRndInteger() {
        return Math.floor(Math.random() * 150 ) + 1;
      }

    async function handleAddPokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRndInteger()}`)
            const sprite  = response.data.sprites.front_default 
            const name = response.data.name 
            const ability = response.data.abilities[0].ability.name

            let i = 0
            let moveArray=[]
            while (i<4) {
              var move = response.data.moves[Math.floor(Math.random()*response.data.moves.length)]
              if(!moveArray.includes(move.move)){
                moveArray.push(move.move)
              }
              i++
            }

            const moveDetails = []

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
            console.log(moveDetails)
            console.log("Pokemon: ", name)
            console.log("Sprite: ", sprite)
            console.log("Ability: ", ability)

            if (response.data.types.length > 1) {
                const pokemonType1 = response.data.types[0].type.name
                const pokemonType2 = response.data.types[1].type.name
                console.log("Type 1: ", pokemonType1)
                console.log("Type 2: ", pokemonType2)
    
            } else {
                const pokemonType1 = response.data.types[0].type.name
                console.log("Type: ", pokemonType1)
            }

        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
        <div className = "container">
            <p style={{visibility : "hidden"}}>board</p>
            <div id="board-sprite"></div>
            <div id="pokemon1"  onClick={() => handleAddPokemon()}>
            </div>
        </div>
        </>
    )
}