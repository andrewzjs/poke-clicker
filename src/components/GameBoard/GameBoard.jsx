import './GameBoard.css';
import { useState, useEffect } from "react";
import axios from 'axios';


export default function GameBoard({ handleAddPokemon, background, pokemon, hide, setHide  }) {
    const characterSprite = "https://i.imgur.com/xKT0jKW.png"
    const [box, setBox] = useState(null)
    const [pokemonSprite, setPokemonSprite] = useState(null)
    const [newPokemon, setNewPokemon] = useState(null)
    const [newPokemonStats, setNewPokemonStats] = useState(null)
    const [newPokedexEntry, setNewPokedexEntry] = useState(null)

    function getRndInteger() {
        return Math.floor(Math.random() * 450 ) + 1;
    }

    function randomBox(){
        return Math.floor(Math.random() * 23 )
    }

    // initializes div and id of 24 boxes from top to bottom in the game grid
    const boxes = []
    for(let i=0; i<19; i++ ) {
        if (box === i) {
            boxes.push(<div key={i} id={`box${i}`} className="sprite wild-pokemon"  onClick={() => handleClick()}><img src={pokemonSprite} alt="" /></div>)
        } else {
            boxes.push(<div key={i} id={`box${i}`} className="sprite"></div>)
        }
    }
    
    useEffect(function() {
        async function generatePokemon() {
            await fetchRandPokemon()
            setTimeout(() => {
                setBox(randomBox())
                setTimeout(() => {
                    setBox(null)
                    setPokemonSprite(null)
                    setNewPokemonStats(null)
                    setNewPokedexEntry(null)
                    setNewPokemon(null)
                    generatePokemon()
                }, 2000)
            }, 2000)
        }
        generatePokemon()
    }, [])

    async function handleClick() {
        setBox(null)
        setPokemonSprite(null)
        setNewPokedexEntry(null)
        setNewPokemon(null)
        setNewPokemonStats(null)
        handleAddPokemon(newPokemon, newPokedexEntry, newPokemonStats)
    }

    async function fetchRandPokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRndInteger()}`)
            const name = response.data.name
            const sprite1  = response.data.sprites.front_default
            const sprite2  = response.data.sprites.other["official-artwork"].front_default
            const pokemonType=[]
            const ability = response.data.abilities[0].ability.name
            const pokedexNum = response.data.id
            const height = response.data.height
            const weight = response.data.weight
            
            const pokemonHPNum = response.data.stats[0].base_stat
            const pokemonAttackNum = response.data.stats[1].base_stat
            const pokemonDefenseNum = response.data.stats[2].base_stat
            const pokemonSpecialAttackNum = response.data.stats[3].base_stat
            const pokemonSpecialDefenseNum = response.data.stats[4].base_stat
            const pokemonSpeedNum = response.data.stats[5].base_stat
            
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
                        pp: movesResponse.data.pp,
                        damageClass: movesResponse.data.damage_class.name
                })
            }
            const newPokemon = {
                name: name,
                sprite1: sprite1,
                sprite2: sprite2,
                pokemonType: pokemonType,
                ability: ability,
                moves: moveDetails,
                dateCaught: Date.now(),
                height: height,
                weight: weight,

            }
            
            const newPokedexEntry = {
                name: name,
                sprite1: sprite1,
                pokemonType: pokemonType,
                ability: ability,
                dateCaught: Date.now(),
                pokedexNum: pokedexNum
            }
            
            const newPokemonStats = {
                hp: pokemonHPNum,
                attack: pokemonAttackNum,
                defense: pokemonDefenseNum,
                specialAttack: pokemonSpecialAttackNum,
                specialDefense: pokemonSpecialDefenseNum,
                speed: pokemonSpeedNum,
                
            }
            setPokemonSprite(sprite1)
            setNewPokemon(newPokemon)
            setNewPokemonStats(newPokemonStats)
            setNewPokedexEntry(newPokedexEntry)
        } catch(err) {
            console.log(err)
        }
    }


    function handleHide(){
        setHide(!hide)
    }

    return (
        <>
            <div className = "board" style={{backgroundImage: `url(${background})`  }}>
            {(pokemon.length>9 && hide===false) && 
                <div className="notification">Your Pokemon Team is full. Release a pokemon if you want to catch a new one! <span><button className="hide-button" onClick={() => handleHide()}>hide</button></span> </div>
            }
                <div id="board-sprite">
                    <img className="character-sprite" src={characterSprite} alt="" />
                </div>
            {boxes}
            </div>
        </>
    )
}