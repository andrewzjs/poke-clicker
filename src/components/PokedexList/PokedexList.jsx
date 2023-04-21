import { useState, useEffect } from "react";
import * as pokedexAPI from '../../utilities/pokedexApi'


export default function PokedexPage({}) {  
  const [pokedex, setPokedex] = useState([])
  
  useEffect(function() {
    async function getPokedex(){
        const pokedex = await pokedexAPI.getAll()
        console.log(pokedex)
        setPokedex(pokedex)
    }
    getPokedex()
}, [])

    return (
        <h1></h1>
    )
  
  }