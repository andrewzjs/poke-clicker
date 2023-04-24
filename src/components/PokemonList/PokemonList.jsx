import { useState, useEffect } from "react";
import * as pokemonAPI from '../../utilities/pokemonApi'
import PokemonListItem from "../PokemonListItem/PokemonListItem";
import './PokemonList.css'

export default function PokemonList ({ pokemon, handleRemovePokemon }) {

    return (
        <>
        <div className="table-container">
          <table>
            <thead>
              <th style={{fontWeight:"bold", fontSize: "20px"}}> Pokemon Team</th>
            </thead>
            <tbody>
            {pokemon.map((p, index) => (
                <PokemonListItem pokemon={p} key={index} handleRemovePokemon={handleRemovePokemon} />
            ))}
            </tbody>
          </table> 
        </div>
        </>
    )
}
