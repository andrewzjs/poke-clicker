import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as pokemonAPI from '../../utilities/pokemonApi'
import * as pokemonStatsAPI from '../../utilities/pokemonStatsApi'
import './PokemonDetailsPage.css'

export default function PokemonDetailsPage({user}) {
    const [pokemon, setPokemon] = useState({})
    const [pokemonStats, setPokemonStats] = useState({})
    const { id } = useParams()
    const history = useNavigate()

    async function handleRemovePokemon(id){
        await pokemonAPI.deletePokemon(id)
        history(-1)
    }

    async function handleGoBack(){
        history(-1)
    }

    useEffect(function() {
        async function getPokemon() {
            const pokemonFromDB = await pokemonAPI.getOne(id)
            const pokemonStatsFromDB = await pokemonStatsAPI.getOne(id)
            setPokemon(pokemonFromDB)
            setPokemonStats(pokemonStatsFromDB)
        }
        getPokemon()
    }, [id])


    return(
        <div className = "container">
        <div className = "details-grid">
            <div id="pokemon-name" > {pokemon.name} </div>
            <div id="pokemon-num"></div>
            <img id="pokemon-sprite" src={pokemon.sprite2} alt="" />
            <div className = "types-container">
            {pokemon && pokemon.pokemonType && pokemon.pokemonType.length > 0 ? (
        <>
            <img id="type1"
            alt=""
            className="type-img"
            src={`https://www.serebii.net/pokedex-bw/type/${pokemon.pokemonType[0]}.gif`}
            />
            {pokemon.pokemonType.length > 1 && (
            <>
            <img id="type2"
            alt=""
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
                <div id="gender-name">Gender</div>
                <div id="gender-val">{pokemon.gender === "male" ? <i style={{color: "aqua"}} class="fa fa-mars" aria-hidden="true"></i> : <i style={{color: "pink"}} class="fa fa-venus" aria-hidden="true"></i>}</div>
                <div id="date-caught-name">Date Caught</div>
                <div id="date-caught-val">{new Date(pokemon.dateCaught).toDateString()}</div>
                <div id="shiny-status-name">Shiny Status</div>
                <div id="shiny-status-val">{pokemon.isShiny ? pokemon.isShiny : "Not Shiny"}</div>
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
                                alt=""
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
            <table className = "stats-container">
                    <thead>
                        <tr>
                        <th>Level</th>
                        <th>HP</th>
                        <th>Attack</th>
                        <th>Defense</th>
                        <th>Special Attack</th>
                        <th>Special Defense</th>
                        <th>Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pokemonStats.level}</td>
                            <td>{pokemonStats.hp}</td>
                            <td>{pokemonStats.attack}</td>
                            <td>{pokemonStats.defense}</td>
                            <td>{pokemonStats.specialAttack}</td>
                            <td>{pokemonStats.specialDefense}</td>
                            <td>{pokemonStats.speed}</td>
                        </tr>
                    </tbody>
                    </table>
                    <div id="details-delete">
                        {pokemon.user === user._id ? (
                            <div>
                            <button id="release-button-details" onClick={() => handleRemovePokemon(id)}>Release Pokemon</button>
                            <button id="back-button-details" onClick={() => handleGoBack()}>Back</button>
                            </div>
                        ) : (
                            <button id="back-button-details" onClick={() => handleGoBack()}>Back</button>
                        )}
                    </div>
            {/* <NavLink to="/">
                <button>go back</button>
            </NavLink> */}
        </div>
        </div>
    )
}

