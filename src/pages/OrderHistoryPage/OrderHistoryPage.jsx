import { checkToken } from "../../utilities/usersService";

export default function OrderHistoryPagePage() {  
    async function handleCheckToken(evt) {
        const expDate = await checkToken()
        alert (expDate)
    }
    
    return (
    <>
        <h1>order history page</h1>
        <button onClick={handleCheckToken}>
            Check When My Login Expires
        </button>
    </>
);
}
