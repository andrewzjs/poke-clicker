import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useParams } from 'react-router-dom';
import { getUser } from '../../utilities/usersService';
import PokedexPage from '../PokedexPage/PokedexPage';
import AuthPage from '../AuthPage/AuthPage';
import PlayerListPage from '../PlayerListPage/PlayerListPage';
import NavBar from '../../components/NavBar/NavBar';
import Game from '../../components/Game/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonDetailsPage from '../PokemonDetailsPage/PokemonDetailsPage';

export default function App() {
    const [user, setUser] = useState(getUser())

    return (
        <main className="App">
            <NavBar user={user} setUser={setUser} />
            { user ? 
            <>
                <Routes>
                    <Route path='/' element={ <Game /> } /> 
                    <Route path='/pokedex' element={ <PokedexPage /> } />
                    <Route path='/playerlist' element={ <PlayerListPage /> } />
                    <Route path='/:id' element={ <PokemonDetailsPage /> } />
                </Routes>
            </>
                : 
                <AuthPage setUser={setUser} /> 
            }
        </main>
    );
}