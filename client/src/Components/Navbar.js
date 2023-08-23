import React, { useState } from 'react'
import '../css/nav.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../Redux/Reducers/LoginReducer'
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react'

const capitalizeFirst = str => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authToken = useSelector(state => state.LoginRedux.islogged);
    const [auth, setAuth] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
      if(localStorage.hasOwnProperty("user")) {
        setAuth(true)
      } else {
        setAuth(false)
      }
  }, [authToken])
  
  const handleClick = () => {
    if(auth) {
        navigate("/profile")
    } else {
        navigate("/")
    }
}


  return (
    <div>
        <nav>
            <div class="container">
            <Link to="/" style={{ textDecoration: 'none' }}><a class="logo">QuizzyFun</a></Link>
            <ul class="menu">
                <li><HashLink smooth to="/#hero"><a>Home</a></HashLink></li>
                <li><a onClick={handleClick}>Categories</a></li>
                <li><HashLink smooth to="/#about"><a>About</a></HashLink></li>
                <li><HashLink smooth to="/#contact"><a>Contact</a></HashLink></li>
            </ul>
            {auth ? 
            <div class="dropdown">
            <button class="dropbtn"> {capitalizeFirst(user?.username)}</button>
            <div class="dropdown-content">
                <Link to="/profile" className='gl'><a className='gl'><ion-icon name="person-outline"></ion-icon>Profile</a></Link>
                <a className='gl' onClick={()=> {dispatch(signOut()); navigate("/")}}><ion-icon name="log-out-outline"></ion-icon>Logout</a>
            </div>
          </div>
            : <> 
            <div class="auth-buttons">
                <Link to="/login"><a class="login-button">Login</a></Link>
                <Link to="/register"><a class="register-button">Register</a></Link>
            </div>
            </>
            }
            </div>
        </nav>
    </div>
  )
}

export default Navbar