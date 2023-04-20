import './Game.css';
import { useState } from "react";
import GameBoard from '../GameBoard/GameBoard'
import PokedexList from '../PokedexList/PokedexList'

export default function Game({user, setUser}) {
    return (
        <div className="home-area">
            <div className="gameboard-area">
                <GameBoard user={user} setUser={setUser} />
            </div>
            <div className="pokemonlist-area">
                <PokedexList user={user} setUser={setUser} />
            </div>
        </div>
    )
}
