import { Link } from 'react-router-dom';
import React from 'react';
import "./navbar.css";
import InputIcon from '@material-ui/icons/Input';
import CallIcon from '@material-ui/icons/Call';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Navbar = props => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand text-dark ml-auto" to="/">
                <h5 >CALL TO MAKE A BOOKING: +254 729 802 788</h5>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                    <CallIcon className='mt-2'/>
                    <li className="nav-item">
                    <Link className="nav-link active text-dark" aria-current="page" to="/contact">Contact</Link>
                    </li>
                    <InputIcon className='mt-2' />
                    <li className="nav-item">
                    <Link className="nav-link text-dark" to="/login">Login</Link>
                    </li>
                    <PersonAddIcon className='mt-2'/>
                    <li className="nav-item">
                    <Link className="nav-link text-dark" to="/create">Create Account</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-dark" to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav> 

    );
}
 
export default Navbar;