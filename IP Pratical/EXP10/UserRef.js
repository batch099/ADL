import React, { Component } from 'react'
class UserRef extends Component {
 constructor(){
 super()
 this.UserRef=React.createRef();
 }
 edit()
 {
 this.UserRef.current.style.backgroundColor="yellow"
 this.UserRef.current.style.fontSize="100px"
 this.UserRef.current.style.fontFamily="Lucida Handwriting"
 
 }
 edit2(){
 this.UserRef.current.style.display="none" //it will hide content
 }
 render() {
 return (
 <div>
 <br />
 <h1>Demo for ref using class component</h1>
 <input ref={this.UserRef} type='text' name="user" />
 <button onClick={()=>this.edit()}>Click Me</button>
 <button onClick={()=>this.edit2()}>Click to Hide</button>
 </div>
 )
 }
}
export default UserRef