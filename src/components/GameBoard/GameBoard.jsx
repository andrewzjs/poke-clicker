import './GameBoard.css';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function GameBoard({ handleAddPokemon }) {
    const characterSprite = "https://i.imgur.com/xKT0jKW.png"
    const [box, setBox] = useState(null)
    const [pokemonSprite, setPokemonSprite] = useState(null)
    const [newPokemon, setNewPokemon] = useState(null)
    const [newPokedexEntry, setNewPokedexEntry] = useState(null)

    function getRndInteger() {
        return Math.floor(Math.random() * 150 ) + 1;
    }

    function randomBox(){
        console.log('random box called')
        return Math.floor(Math.random() * 23 )
    }

    // initializes div and id of 24 boxes from top to bottom in the game grid
    const boxes = []
    for(let i=0; i<24; i++ ) {
        if (box === i) {
            boxes.push(<div key={i} id={`box${i}`} className="sprite wild-pokemon"  onClick={() => handleClick()}><img src={pokemonSprite} alt="" /></div>)
        } else {
            boxes.push(<div key={i} id={`box${i}`} className="sprite"></div>)
        }
    }
    
    useEffect(function() {
        async function generatePokemon() {
            setTimeout(() => {
                fetchRandPokemon()
                setBox(randomBox())
                setTimeout(() => {
                    setBox(null)
                    setPokemonSprite(null)
                    setNewPokedexEntry(null)
                    setNewPokemon(null)
                }, 2000)
                generatePokemon()
            }, 2000)
        }
        generatePokemon()
    }, [])

    async function handleClick() {
        setBox(null)
        setPokemonSprite(null)
        setNewPokedexEntry(null)
        setNewPokemon(null)
        handleAddPokemon(newPokemon, newPokedexEntry)
    }

    async function fetchRandPokemon() {
        console.log('fetch pokemon called')
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRndInteger()}`)
            const name = response.data.name
            const sprite  = response.data.sprites.front_default
            setPokemonSprite(sprite)
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
                var move = await response.data.moves[Math.floor(Math.random()*response.data.moves.length)]
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
                moves: moveDetails,
                dateCaught: Date.now()
            }
            const newPokedexEntry = {
                name: name,
                sprite: sprite,
                pokemonType: pokemonType,
                ability: ability,
                dateCaught: Date.now()
            }
            setNewPokemon(newPokemon)
            setNewPokedexEntry(newPokedexEntry)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className = "board">
                <div id="board-sprite">
                    <img className="character-sprite" src={characterSprite} alt="" />
                </div>
            {boxes}
            </div>
        </>
    )
}