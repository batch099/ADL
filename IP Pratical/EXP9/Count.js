import React, { Component } from 'react'

export class Count extends Component {
    constructor() 
        {
            super();
            this.state={
                        count:0
                        }
        }
    
        
        updatestate()
        {
            this.setState(
                {
                count : this.state.count+1
            }
            )
        }
       
        render(){
            return(
                <div>
                    <h1>count is:{this.state.count} </h1>
                    <button onClick={()=>this.updatestate()}> Click for Update</button>
                </div>
            )
       
        }

}

export default Count
