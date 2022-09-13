import React, {useState} from 'react';
import{useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../config/firebase";
import  { Register } from "./Register"
import "../Css/login.css"
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/userAuthContext';


const Login = () => {
    const[email,setEmail] = useState('')
    const[password, setPassword] =useState("");
    // const {googleSignIn}=useUserAuth();
    // const [error,setError]=useState("");

    const btn ={
        width:'150px',
        height:'30px',
        marginTop:"3%"
    }

    let history = useHistory();
    const login =(()=>{

        signInWithEmailAndPassword(auth, email ,password).then(()=>{
         history.push("/Home")
        }).catch((err)=>{
            console.log(err)
        })
       
    })

   
    
  return (
    <div className='Main'>
        
        <div className='Image'></div>
               
       <div className='Login'>

            <h1>Welcome Back</h1>
            <h5>Manage Your Checklist Easily</h5>
            <label>Email</label><br></br>
            <input type="email" placeholder="Enter your email"onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <label>Password</label><br></br>
            <input type="password" placeholder="Enter your password"onChange={(e)=>setPassword(e.target.value)} /><br></br>

            <button className='Btn' style={btn} onClick={login}>Login</button> <br></br>

            <span>Don't have an account </span> <span>
                
                <Link to="/Register"> Create account here</Link>
               
            </span>
                
                <h4>OR</h4>

               <GoogleButton />
        
       </div>
    </div>
  )
}
export default Login