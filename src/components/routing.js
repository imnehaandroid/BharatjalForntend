import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import userAuth from '../components/userAuth'
import Home from '../components/home'


export default function Routing(){
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={userAuth}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            </Router>
        </>
    )
}