import React from 'react'
import "../Css/displaytask.css"

const Displaytask = (props) => {
    return(
        <div>
            {props.list.map((item) => (
                <div>
                    {item.transactionType ==="High" ?(
                            <div className="Priority-itemH" >
                                <div>
                                        <h4>{item.item}</h4>
                                </div>
                                <button className='com'>Complete</button>
                            </div>
                        
                    ):item.transactionType ==="Low" ?(
                        <div className="Priority-itemL" >
                            <div>
                                    <h4 >{item.item}</h4>
                            </div>
                            <button className='com'>Complete</button>
                        </div>
                    
                ):item.transactionType ==="Medium" ?(
                            <div className="Priority-itemM">
                                <div>
                                    <h4>
                                        {item.item}
                                    </h4>
                                </div>
                                <button className='com'>Complete</button>
                            </div>
                    ):(
                        <div>

                        </div>
                    )}  
            </div>
            ))}
        </div>
    );

}

export default Displaytask