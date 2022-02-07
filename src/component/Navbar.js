import './Navbar.css';

import React from 'react';

//import UserPage from '../container/UserPage'

const Navbar = () => (
    <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
        <img 
            src = "https://avatars.githubusercontent.com/u/66577?v=4"
             width = "50"
             height ="50"
             className = "mr-3 avatar"
             alt = "profile"
             />
             <h3 style ={{ color: "white" }}>JakeWharton</h3>

             <a className='ml-auto d-flex align-items-center' href='/#'>
                 Search for Other User</a>
    </nav>
);

export default Navbar;