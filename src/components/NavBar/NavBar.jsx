import { Link, NavLink } from "react-router-dom"
import * as userService from "../../utilities/usersService"
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    function handleLogOut () {
        userService.logOut()
        setUser(null)
    }

    const mystyle = {
        width: "160px",
        height: "40px"
    }

    return ( 
    <>
        <header>
            <img src="https://i.imgur.com/ddyF4WO.png" style={mystyle}/>
            <nav>
                <ul className='links'>
                    <li><NavLink to="/"><i className="fa fa-home nav-icon" aria-hidden="true"></i><span>Home</span></NavLink></li>
                    <li><NavLink to="/pokedex"><i className="fa fa-book nav-icon" aria-hidden="true"></i>Pokedex</NavLink></li>
                    <li><NavLink to="/playerlist"><i className="fa fa-users nav-icon" aria-hidden="true"></i>Player List</NavLink></li>
                    <li><NavLink to="" onClick={handleLogOut}><i className="fa fa-sign-out nav-icon" aria-hidden="true"></i>Log Out</NavLink></li>
                </ul>
            </nav>
        </header>
    </>

    )
}

