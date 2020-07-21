import React from 'react'
import {Link} from 'react-router-dom'


export default class userAuth extends React.Component{
 
        state={
            proxyurl : "https://cors-anywhere.herokuapp.com/",
            username:'Admin',
            password:'12345',
            token:"",
        }
        componentDidMount=()=>{
            this.verification()
        }
    
    
    verification=()=>{
     
        const url = 'http://bharatjaldispenser.herokuapp.com/login'
  fetch(url,{method: 'GET',headers: {"Authorization": 'Basic ' + btoa(this.state.username + ":" + this.state.password)},
      }).then(response => response.json())
        .then(data => {
            this.setState({
                token:data
            })

   }).catch((error) => {console.log(error+'  getting an error in getting the data')})
     
     }

    render(){
        console.log('this.state.token.token', this.state.token.token)
          
        return(
            <div>
                <h1>This is login page</h1>
                

                <h2>Username</h2>
                <input type="text" value={this.state.username} onChange={(e)=> this.setState({username:e.target.value})}/>
                <h2>Password</h2>
                <input type="password" value={this.state.password} onChange={(e)=> this.setState({password:e.target.value})}/>
                <br/><br/>
                <Link to={`/home?id=${this.state.token.token}`}>
                   <button onClick={this.verification}>Login</button>
                </Link>  
            </div>
        )
    }
}