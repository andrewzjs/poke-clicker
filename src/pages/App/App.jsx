import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/usersService';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPagePage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
    const [user, setUser] = useState(getUser())

    return (
        <main className="App">
            <NavBar user={user} setUser={setUser} />
            { user ? 
            <>
                <Routes>
                    <Route path='/orders/new' element={ <NewOrderPage /> } />
                    <Route path='/orders' element={ <OrderHistoryPagePage /> } /> 
                </Routes>
            </>
                : 
                <AuthPage setUser={setUser} /> 
            }
        </main>
    );
}