import { useState, useEffect } from "react";
import * as pokemonAPI from '../../utilities/pokemonApi'

export default function PokemonList ({ pokemon }) {
    return(
        <>
            <div>
                Pokemon List
            </div>
            <div>
                { pokemon.name }
            </div>
        </>
    )
}