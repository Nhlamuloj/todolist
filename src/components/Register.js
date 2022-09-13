import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../config/firebase'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom';
import "../Css/Register.css"


const Register = () => {
 const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]=useState('')
    let history=useHistory();

    const btn ={
        width:'150px',
        height:'30px',
        marginTop:"3%"
    }

    const Register =async(e)=>{
        e.preventDefault();
        setError("")
        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            history.push("/Home");
        }).catch((error)=>{
            setError(error.message)
        })
    };

  

  return (
    <div className='wrapper'>
        <div className='Image'></div>
        <div className='Register'>
            
             <label>Name</label>
            <input type="name" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/> 
            <label>Email</label>
            <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
            <button className='Btn' onClick={Register}>SignUp</button>
             
            <span>Already have an account </span> <span>
                
                <Link to="/"> Go to Login</Link>
               
            </span>
                
                <h4>OR</h4>

               <GoogleButton/>
        
        </div>

    </div>
  )
}

export default Register