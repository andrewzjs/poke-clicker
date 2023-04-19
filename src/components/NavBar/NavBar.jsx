import { Link, NavLink } from "react-router-dom"
import * as userService from "../../utilities/usersService"

export default function NavBar({ user, setUser }) {
    function handleLogOut () {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/pokedex">Pokedex</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/playerlist">Player List</NavLink>
            &nbsp; | &nbsp;
           <NavLink to="" onClick={handleLogOut}>Log Out</NavLink>
         
        </nav>
    )
}
