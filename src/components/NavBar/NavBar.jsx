import { Link, NavLink } from "react-router-dom"
import * as userService from "../../utilities/usersService"
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    function handleLogOut () {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <img src="https://i.imgur.com/ddyF4WO.png" id="navbar-logo" />
            <NavLink to="/"><i class="fa fa-home" aria-hidden="true"></i>Home</NavLink>
            &nbsp;  &nbsp;
            <NavLink to="/pokedex"><i class="fa fa-book" aria-hidden="true"></i>Pokedex</NavLink>
            &nbsp;  &nbsp;
            <NavLink to="/playerlist"><i class="fa fa-users" aria-hidden="true"></i>Player List</NavLink>
            &nbsp;  &nbsp;
           <NavLink to="" onClick={handleLogOut}><i class="fa fa-sign-out" aria-hidden="true"></i>Log Out</NavLink>
        </nav>
    )
}
