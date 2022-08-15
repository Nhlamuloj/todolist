import React from 'react'
import { Link } from "react-router-dom";
import AddTask from './AddTask';
import Displaytask from '../components/Displaytask'
import "../Css/home.css"

const Home = (props) => {
   
  return(
        
  
      
      <div >
        <div >
        <Link to="/"><button className='btn'>Logout</button></Link>
        </div>

        <div className='home'>
        <AddTask add={props.add}/>
        <Displaytask list={props.list}/>
        </div>
      </div>

    
)

}

export default Home