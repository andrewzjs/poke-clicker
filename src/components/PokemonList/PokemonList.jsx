import { useState, useEffect } from "react";
import * as pokemonAPI from '../../utilities/pokemonApi'
import PokedexListItem from "../PokedexListItem/PokedexListItem";

export default function PokemonList ({ pokemon, handleRemovePokemon }) {
    return(
        <div>
            { pokemon.map((p, idx) => (
                <PokedexListItem pokemon={p} key={idx} handleRemovePokemon={handleRemovePokemon} />
            ))}
        </div>
    )
}