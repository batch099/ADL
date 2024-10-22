import React,{Component} from 'react'
class State extends Component
{
     constructor()
     {
        super();
        this.state={
            data:"APSIT"
        }
     }
    render()
    {
        return(<h1>{this.state.data}</h1>)
    }
}
export default State;
