import { NavLink } from "react-router-dom"


export const Navigation = () => {
    return (
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
    )
  }