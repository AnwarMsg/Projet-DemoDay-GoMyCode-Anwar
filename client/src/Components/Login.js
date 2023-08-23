import '../css/login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../Redux/Reducers/LoginReducer';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [dataUser, setdataUser] = useState({username : "", password : ""});
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const soumettre = (event) => {
    event.preventDefault();   
    dispatch(LoginUser(dataUser)).then((res) => {
      let loggedIn = res.payload.islogged;
      if (loggedIn) {
        navigate("/")
      } else {
        setErrorMessages({name: "error", message: "Wrong Username or Password, please try again"});
      }
    })
  }

  const erreur = (name) => 
    name === errorMessages.name && (
      <div className='erreur'>{errorMessages.message}</div>
     );

  return (
    <div className="login-block">
      <form onSubmit={soumettre}>
        <h1>Login</h1>
        <div className="input-container">
            <input type="text" name="uname" required placeholder='Username' onChange={(e)=>setdataUser({...dataUser, username: e.target.value})}/>
        </div>
        <div className="input-container">
            <input type="password" name="pass" required placeholder='Password' onChange={(e)=>setdataUser({...dataUser, password: e.target.value})} />
            {erreur("error")}
        </div>
        <div>
            <p>Not registered yet ? <Link to="/register" style={{ textDecoration: 'none' }}><span>Click Here!</span></Link></p>
        </div>
        <div className="button-container">
            <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Login
