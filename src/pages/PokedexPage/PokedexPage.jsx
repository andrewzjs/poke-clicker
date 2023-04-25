import { useState, useEffect } from "react";
import * as pokedexAPI from '../../utilities/pokedexApi'
import './PokedexPage.css'

export default function PokedexPage({}) {
  const [pokedex, setPokedex] = useState([])
  
  useEffect(function() {
    async function getPokedex(){
        const pokedex = await pokedexAPI.getAll()
        setPokedex(pokedex)
    }
    getPokedex()
}, [])

return (
<<<<<<< HEAD
  <div className ="pokedex-container"> 
=======
  <div className ="pokedex-container">
>>>>>>> 0d34acb344750c6cd870da9c6d5c3ff04cb06fba
  <h2 style={{color:"white", paddingTop:"1%"}}>Pokedex Entries</h2>
    <table className="pokedex-index">
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
      <td>#{pokemon.pokedexNum}<img src={pokemon.sprite1}/></td>
      <td id="pokedex-name">{pokemon.name}</td>
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