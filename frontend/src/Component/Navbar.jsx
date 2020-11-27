import React from 'react'
import { useDispatch } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { logout } from '../Redux/AuthReducer/actions'

export const Navbar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = () => {
        dispatch(logout())
        history.push('/')
    }
    return (
        <div>
            
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand">Home</Link>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}
