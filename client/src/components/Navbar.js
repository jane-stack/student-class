import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { NavLink, useHistory } from "react-router-dom";

function Navbar() {
    const { logoutStudent, loggedIn } = useContext(StudentContext);
    const navigate = useHistory();

    // handles the logout button
    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        logoutStudent()
    }
    
    navigate.push("/")

    // // if user is logged in:
    const userIn = () => {
        return (
            <>
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/courses" className="nav-link">Courses</NavLink>
            <NavLink to="/settings" className="nav-link">Setting</NavLink>
            <NavLink to="#" className="nav-link" onClick={logoutUser}>Logout</NavLink>
            </>
        )
    }

    // if user is not logged in:
    const userOut = () => {
        return (
            <>
            <h4>Log In to access your student account</h4>
            </>
        )
    }

    return (
        <div className="navbar">
            <div className="nav-title"><h1>Student Account</h1></div>
            { loggedIn ? userIn() : userOut() }
        </div>
    )
}

export default Navbar;