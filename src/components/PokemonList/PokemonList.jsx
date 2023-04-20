import { useState, useEffect } from "react";
import * as pokemonAPI from '../../utilities/pokemonApi'
import PokemonListItem from "../PokemonListItem/PokemonListItem";
import './PokemonList.css'

export default function PokemonList ({ pokemon }) {

    return (
        <>
        <div class="table-container">
          <table>
            <thead>
              <th> Pokemon</th>
            </thead>
            <tbody>
            {pokemon.map((p, index) => (
                <PokedexListItem pokemon={p} key={index} handleRemovePokemon={handleRemovePokemon} />
            ))}
            </tbody>
          </table> 
        </div>
        </>
    )
}
