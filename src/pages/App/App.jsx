import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/usersService';
import PokedexPage from '../PokedexPage/PokedexPage';
import AuthPage from '../AuthPage/AuthPage';
import PlayerListPage from '../PlayerListPage/PlayerListPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
    const [user, setUser] = useState(getUser())

    return (
        <main className="App">
            <NavBar user={user} setUser={setUser} />
            { user ? 
            <>
                <Routes>
                    <Route path='/pokedex' element={ <PokedexPage /> } />
                    <Route path='/playerlist' element={ <PlayerListPage /> } /> 
                    
                </Routes>
            </>
                : 
                <AuthPage setUser={setUser} /> 
            }
        </main>
    );
}