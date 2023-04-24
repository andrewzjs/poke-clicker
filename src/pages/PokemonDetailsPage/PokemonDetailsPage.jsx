import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as pokemonAPI from '../../utilities/pokemonApi'
import * as pokemonStatsAPI from '../../utilities/pokemonStatsApi'
import './PokemonDetailsPage.css'

export default function() {
    const [pokemon, setPokemon] = useState({})
    const [pokemonStats, setPokemonStats] = useState({})
    const { id } = useParams()

    useEffect(function() {
        async function getPokemon() {
            const pokemonFromDB = await pokemonAPI.getOne(id)
            const pokemonStatsFromDB = await pokemonStatsAPI.getOne(id)
            setPokemon(pokemonFromDB)
            setPokemonStats(pokemonStatsFromDB)
        }
        getPokemon()
    }, [])


    return(
        <div className = "container">
        <div className = "details-grid">
            <div id = "pokemon-name" > {pokemon.name} </div>
            <div id = "pokemon-num"></div>
            <img id = "pokemon-sprite" src={pokemon.sprite}/>
            <div className = "types-container">
            {pokemon && pokemon.pokemonType && pokemon.pokemonType.length > 0 ? (
        <>
            <img id="type1"
            className="type-img"
            src={`https://www.serebii.net/pokedex-bw/type/${pokemon.pokemonType[0]}.gif`}
            />
            {pokemon.pokemonType.length > 1 && (
            <>
            <img id="type2"
            className="type-img"
            src={`https://www.serebii.net/pokedex-bw/type/${pokemon.pokemonType[1]}.gif`}
            />
        </>
            )}
        </>
            ) : (
            <p>No type information available.</p>
            )}
            </div>
            <div className = "misc-container">
                <div id="height-name">Height</div>
                <div id="height-val">{pokemon.height}</div>
                <div id="weight-name">Weight</div>
                <div id="weight-val">{pokemon.weight}</div>
                <div id="held-item-name">Held Item</div>
                <div id="held-item-val">{pokemon.heldItem}</div>
                <div id="date-caught-name">Date Caught</div>
                <div id="date-caught-val">{new Date(pokemon.dateCaught).toDateString()}</div>
                <div id="shiny-status-name">Shiny Status</div>
                <div id="shiny-status-val">{pokemon.isShiny ? pokemon.isShiny : "false"}</div>
                <div id="ability-name">Ability</div>
                <div id="ability-val">{pokemon.ability}</div>
            </div>
            <div className = "stats-container"></div>
            <div id = "moves-container-label"><h4>Moves</h4></div>
            <div className="moves-container">
                {pokemon.moves && pokemon.moves.length > 0 ? (
                    <table>
                    <thead>
                        <tr>
                        <th>Move</th>
                        <th>Power</th>
                        <th>Type</th>
                        <th>Class</th>
                        <th>Accuracy</th>
                        <th>PP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemon.moves.map(move => (
                        <tr key={move._id}>
                            <td>{move.move}</td>
                            <td>{move.power ? move.power : "0"}</td>
                            <td><img id="type1"
                                style={{scale:"110%"}}
                                className="type-img"
                                src={`https://www.serebii.net/pokedex-bw/type/${move.moveType}.gif`}
                            /></td>
                            <td>{move.damageClass}</td>
                            <td>{move.accuracy ? move.accuracy : "100"}</td>
                            <td>{move.pp}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                ) : (
                    <p>No moves available.</p>
                )}
            </div>
            <div id="stats-container-label"><h4>Stats</h4></div>
            <div className = "stats-container">
                <div id="level-name">Level</div>
                <div id="level-val">{pokemonStats.level}</div>
                <div id="attack-name">Attack</div>
                <div id="attack-val">{pokemonStats.attack}</div>
                <div id="defense-name">Defense</div>
                <div id="defense-val">{pokemonStats.defense}</div>
                <div id="special-attack-name">Special Attack</div>
                <div id="special-attack-val">{pokemonStats.specialAttack}</div>
                <div id="special-defense-name">Special Defense</div>
                <div id="special-defense-val">{pokemonStats.specialDefense}</div>
                <div id="speed-name">Speed</div>
                <div id="speed-val">{pokemonStats.speed}</div>
            </div>
            {/* <NavLink to="/">
                <button>go back</button>
            </NavLink> */}
        </div>
        </div>
    )
}

