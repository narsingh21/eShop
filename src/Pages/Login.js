import { Link ,useNavigate} from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
import React, { useState } from 'react'
import './Login.css'
import { auth } from '../Firebase';

const Login = () => {
        const history = useNavigate()
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const signIn=e=>{
      e.preventDefault()
      auth.signInWithEmailAndPassword(email,password)
      .then(auth=>history('/'))
      .catch(error=>alert(error.message))
    }
    const register = e =>{
      e.preventDefault()
      auth.createUserWithEmailAndPassword(email,password)
      .then(auth=>{
        if(auth)
        history('/')
      })
      .catch(error=>alert(error.message))
    }
  return (
    <div className="login">
             
             <Link to='/' style={{textDecoration:'none'}}>
               <div className="login-logo">
               <StorefrontIcon className='login-logo-image' fontSize='Large'/>
               <h2>eShop</h2>
               </div>
             </Link>

         <div className="login-container">
                <h2>Sign-in</h2>
            <form action="">
            <label htmlFor="email">E-mail</label><br />
            <input type="email" value={email} onChange ={e=> setEmail(e.target.value)} name="" id="email" />
            <br />
            <label htmlFor="password">Password</label><br />
            <input type="password" value={password} onChange ={e=> setPassword(e.target.value)} name="" id="password" /> <br />  
            <button className="signin-btn" onClick={signIn}>Signin</button>
            </form>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, exercitationem.</p> 
            <button className="login-register-btn" onClick={register}>create your account</button>
          </div>
    </div>
  )
}

export default Login