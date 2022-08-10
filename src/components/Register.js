import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase'
import { auth } from './config/firebase'

const Register = () => {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    let history=useHistory();

    const Register =(() =>{
        createUserWithEmailAndPassword(auth,name,email,password).then(()=>{
            history.push("/Home");
        }).catch((error)=>{
            console.log(error);
        })
    });

    
  return (
    <div className='container'>
        <div className='signup'>
            <input type="name" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={Register}>SignUp</button>
        </div>

    </div>
  )
}

export default Register