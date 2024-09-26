import React,{useState} from 'react'
import { Logo } from '../../components/common/logo/Logo'
import { Button, Flex } from 'antd';
import "./AdminLogin.css"
import { loginUser } from '../../services/authService';


const AdminLogin = () => {
  const [emailId,setEmailID]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState('');
  const handleLogin= async(event)=>{
    
    event.preventDefault();
    try{
      // const response=await fetch('http://localhost:8080/login/user',{
      //   method:'POST',
      //   headers:{
      //     'Content-Type':'application/json',
          
      //   },
      //   body:JSON.stringify({emailId,password}),
      // });
      // if(!response.ok){
      //   throw new Error('login failed');
      // }
      // const data= await response.json();
      const data= await loginUser(emailId,password);
      console.log('login success : ',data);
      localStorage.setItem('token',data.token);
    }catch(error){
      setError('Invalid email or password');
      console.error('Error :',error);
    };

  };
  const clearError = () => {
    setError(null);
};
  return (
    <div className='main' data-testid="admin-login">
      <div className='rectangle1'>
        <Logo/>
      </div>
      <div className='rectangle2'>
      <form onSubmit={handleLogin}>
            <div className="form-group">
                <input type="text" id="emailid" name="emailid"
                 placeholder='Admin' required value={emailId} 
                 onChange={(e)=>{setEmailID(e.target.value);
                  clearError();
                }}
                 
                 />
            </div>
            <div className="form-group star">
                <input type="password" id="password" name="password"
                 placeholder='*****' required value={password}
                 onChange={(e)=>{setPassword(e.target.value);
                  clearError();
                }}
                 />
            </div>
            <button type="submit">Login</button>
            {error && <div className="error">{error}</div>}
        </form>
         
      </div>
      
    </div>
  )
}

export default AdminLogin
