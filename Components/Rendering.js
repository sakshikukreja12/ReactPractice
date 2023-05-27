import React, {Component} from 'react'

class Rendering extends Component{
    constructor(props){
        super(props)

    this.state={
        isLoggedIn: true
      }

    }
    

render() {
    // 4rth method short circuit operator
    return this.state.isLoggedIn && <div>welcome</div>
     //3rd method (ternary conditional operator)isloggedin become false 
    //  return this.state.isLoggedIn ? (
    //     <div>Welcome</div>
    //  ) : (
    //     <div>Welcome sakshi</div>
    //  )
    
 
    //2nd method element variables
    // let message
    // if(this.state.isLoggedIn){
    //     message= <div>Welcome</div>
    // } else{
    //     message=<div>Welcome sakshi</div>
    // }
    // return <div>{message}</div>
    //one method if else
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             welcome
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div> Welcome Sakshi</div>
    //     )
    }
}

export default Rendering