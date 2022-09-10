import React, { useState } from 'react'
import '../css/login.css'
import amazon_logo from '../assets/amazon_PNG24.png'
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const signIn = e => {
      e.preventDefault();

      auth
          .signInWithEmailAndPassword(email, password)
          .then(auth => {
              navigate('/')
          })
          .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
}
  return (
    <div className='login__container'>
        <div className='amazon__logo'>
        </div>

        <div className='signup__box'>
            <div className='signup'>Sign-In</div>

            <div className='form__row'>
                <div className='form__label'>E-mail</div>
                <input onChange={e => setEmail(e.target.value)} type='email' className='form__input'></input>
            </div>

            <div className='form__row'>
                <div className='form__label'>Password</div>
                <input onChange={e => setPassword(e.target.value)} type='password' className='form__input'></input>
            </div>

            <button onClick={signIn} className='submit__btn'>Sign In</button>
            <p className='info'>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='submit__btn'>Register</button>

        </div>
    </div>
  )
}

export default Login