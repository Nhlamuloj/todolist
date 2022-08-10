import React from 'react'
import { Link } from "react-router-dom";
import AddTask from './AddTask';
import Displaytask from './Displaytask';

const Home = (props) => {
   
  return(
        
  
      
      <div className='home'>

        <Link to="/"><button>logout</button></Link>
        <AddTask add={props.add}/>
        <Displaytask list={props.list}/>
        
        </div>
)

}

export default Home