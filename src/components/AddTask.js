
import React,{useState} from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import "../Css/addtask.css"


const AddTask = (props) => {
    const [task, setTask] = useState("");
    const [transactionType, settransactionType] = useState("");
    
    const add =(()=>{
       
        const collectionRef= collection(db, "transaction");
        
        const transaction ={
            task:task ,
            
            transactionType:transactionType
        };
        addDoc(collectionRef, transaction).then (()=>{
            alert(" successfully")
        }).catch((error)=>{
            console.log(error);
        })

        props.add( task, transactionType);
    })
    return(
     <div className="new-task">
         <input placeholder="Add new task"
          onChange={(e)=>setTask(e.target.value)}
         />{" "}
         
         <select onChange={(e)=>settransactionType(e.target.value)}  ><br></br>
             <option hidden>Priority</option>
             <option value="High">High</option><br></br>
             <option value="Medium">Medium</option><br></br>
             <option value="Low">Low</option>
         </select>{" "}
         <button id="btn" onClick={add}>+</button>
     </div>  

    

        
    )


  
}

export default AddTask