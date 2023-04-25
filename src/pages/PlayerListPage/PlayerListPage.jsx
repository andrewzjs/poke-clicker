import { useEffect, useState } from "react";
import * as usersAPI from '../../utilities/usersApi'
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import './PlayerListPage.css'

export default function PlayerListPage() {  
    const [users, setUsers] = useState([])
    
    useEffect(function() {
        async function getAllUsers(){
            const allUsers = await usersAPI.getAllUsers()
            setUsers(allUsers)
        }
        getAllUsers()        
    }, [])

    return (
        <>
            {users.map((user, idx) => (
                <PlayerCard user={user} key={idx} />
            ))}
        </>
    );
}
