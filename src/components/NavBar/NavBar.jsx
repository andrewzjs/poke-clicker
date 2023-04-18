import { Link, NavLink } from "react-router-dom"
import * as userService from "../../utilities/usersService"

export default function NavBar({ user, setUser }) {
    function handleLogOut () {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <NavLink to="/orders">Order History</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/orders/new">New Order</NavLink>
            &nbsp; { user && <p>Welcome, {user.name}</p> }
            &nbsp; <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}
