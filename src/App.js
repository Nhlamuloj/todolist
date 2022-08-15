
import React,{useState} from "react";
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import{BrowserRouter as Router , Switch ,Route} from 'react-router-dom';


function App() {
  
  const [transaction, setTransaction] = useState ([]);
  

  const addTransaction = (( item, transactionType)=>{

    setTransaction ((items)=>[...items,{
      
      item:item,
      transactionType:transactionType,
    }])
  })
  console.log(transaction);

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/Register" component={Register} ></Route>
        <Route path= "/Home">
      
          <Home list ={transaction} add={addTransaction}/>
        </Route>
      </Switch>
     
    </Router>


    
  );
}

export default App;
