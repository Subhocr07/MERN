import React,{useState} from 'react'

const Login = () => {
    const [input,setInput]=useState({
        email:"",
        password:"",
    })

    const handleOnLogInChange=(e)=>{
        console.log(e)
    }
    const handleOnLogIn=(e)=>{
        console.log(e)
    };
  return (
    <>
      <div className='login_container'>
        <div className='inputBox'>
            <input type="email" name='email' value={input.email} placeholder="Email" onChange={handleOnLogInChange} />
            <input type="password" name='password' value={input.password} placeholder="Password" onChange={handleOnLogInChange} />
        </div>
        <div className='inputBox_button'>
            <button onClick={handleOnLogIn}>Log In</button>
        </div>
      </div>
    </>
  )
}

export default Login;
