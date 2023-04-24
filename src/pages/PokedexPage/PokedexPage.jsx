import { useState, useEffect } from "react";
import * as pokedexAPI from '../../utilities/pokedexApi'
import './PokedexPage.css'

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
  <div class ="pokedex-container"> 
  <h2 style={{color:"white", paddingTop:"1%"}}>Pokedex Entries</h2>
    <table class="pokedex-index">
      <thead>
        <tr>
          <th>Sprite</th>
          <th>Pokemon</th>
          <th>Type</th>
          <th>Ability</th>
          <th>Date Caught</th>
        </tr>
      </thead>
      <tbody>
 {pokedex.map(pokemon => (
    <tr>
      <td>#{pokemon.pokedexNum}<img src={pokemon.sprite}/></td>
      <td>{pokemon.name}</td>
      <td>
      {pokemon.pokemonType.length > 1 ? (
  <><img className="type-img" src={`https://www.serebii.net/pokedex-bw/type/${pokemon.pokemonType[0]}.gif`} /> <br/> <img className="type-img" style={{marginTop:".5rem"}}src={`https://www.serebii.net/pokedex-bw/type/${pokemon.pokemonType[1]}.gif`} /></>
) : (
  <><img className="type-img" src={`https://www.serebii.net/pokedex-bw/type/${pokemon.pokemonType[0]}.gif`} /></>
)}
      </td>
      <td>{pokemon.ability}</td>
      <td>{new Date(pokemon.dateCaught).toDateString()}</td>
    </tr>
  ))} 
      </tbody>
    </table>
  </div>
)
}