import { Component } from "react";
import tree from './tree.jpeg'
import './index.css';
function App(){
 return (
 <div>
 <h1 className="hh">Welcome to React App</h1>
 <h2>This is my First Component</h2>
 <a className="a"
 href="https://www.google.com">Click to release the Image</a>
 <br></br>
 <img src={tree} width="400" height="500"></img>
 </div>
 );
}
export default App;