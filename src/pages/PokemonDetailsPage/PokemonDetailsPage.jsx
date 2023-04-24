import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as pokemonAPI from '../../utilities/pokemonApi'

export default function() {
    const [pokemon, setPokemon] = useState({})
    const { id } = useParams()

    useEffect(function() {
        async function getPokemon() {
            const pokemonFromDB = await pokemonAPI.getOne(id)
            setPokemon(pokemonFromDB)
        }
        getPokemon()
    }, [])


    return(
        <>
            <h1>hello</h1>
            {pokemon.name}
            <NavLink to="/">
                <button>go back</button>
            </NavLink>
        </>
    )
}