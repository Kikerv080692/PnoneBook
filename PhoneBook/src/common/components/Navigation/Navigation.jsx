import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { logOut } from "../../../redux/auth/authOperations"


export const Navigation = () => {
const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logOut())
    }

    return (
        <>
      <nav>
        <ul>
            <li>
                <NavLink to='phonebook'>PhoneBook</NavLink>
            </li>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='login'>Login</NavLink>
            </li>
            <li>
                <NavLink to='register'>Register</NavLink>
            </li>
        </ul>
        
      </nav>
      <button type='button' onClick={handleLogout}>Logout</button>
        </>
    )
  }