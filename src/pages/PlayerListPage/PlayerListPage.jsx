import { checkToken } from "../../utilities/usersService";

export default function PlayerListPage() {  
    async function handleCheckToken(evt) {
        const expDate = await checkToken()
        alert (expDate)
    }
    
    return (
    <>
        <h1>Player List Page</h1>
        <button onClick={handleCheckToken}>
            Check When My Login Expires
        </button>
    </>
);
}
