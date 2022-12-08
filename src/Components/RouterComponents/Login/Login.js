
import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom'
function Login(props) {
  const [status, setStatus] = useState(true)
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name`)
  }

  const homePageHandler =  () => {
    console.log("console",status)
      if(status){
        navigate('/home')
        props.homeStatus(true)
      }
      
  }
  return (

    <div className='section-login'>
      <div className='login-part'>
        <form onSubmit={() => handleSubmit()}>
          <h2>Login into Account</h2>
          <div>
            <label>userName:</label>
            <input placeholder='email' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
          </div>

          <div>
            <label>Password:</label>
            <input placeholder='***' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>

          <button type='submit' onClick={() => homePageHandler()}>Login</button>
        </form>



      </div>
      <div className='logo-part'>
        image part
      </div>
    </div>
  )
}

export default Login