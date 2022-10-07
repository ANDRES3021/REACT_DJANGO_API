import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import '/home/andrespardo/Desktop/react chuck/chuch/src/App.css';

const Header = () => {
  let {user} = useContext(AuthContext)
  return (
    <nav>
        
        <Link to="/">Home</Link>
        <span> | </span>
        {user ? (
          <p>Logout</p>
        ):(<Link to="/loginPage">Login</Link>
        )}
        <p>{user &&   <p>Hello {user.username}</p>}</p>
        <span> | </span>
        <Link to="/getjoke">Get jokes</Link>

        
            
    </nav>
  )
}

export {Header}