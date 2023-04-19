import './Game.css';
import { useState } from "react";
import GameBoard from '../GameBoard/GameBoard'

export default function Game({user, setUser}) {
    return (
        <>
        <button class="button"> grassy terrain</button>
        <GameBoard user={user} setUser= {setUser} />
        </>
    )
}
