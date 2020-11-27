import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { Signup } from './Signup'
import { Login } from './Login'

export const Routes = () => {
    return (
        <div>
            <Route path='/' exact render={()=> <Login />}/>
            <Route path='/signup' render={()=> <Signup />}/>
            <Route path="/dashboard" render={()=><Navbar />} />
            <Route path="/dashboard" render={()=> <Home />} />
        </div>
    )
}
