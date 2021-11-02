import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>
                <Link to="/Home"  className="link">home</Link>
                </li>
                <li>
                <Link to="/About"  className="link">about</Link>
                </li>
                <li>
                <Link to="/Contact"  className="link">contact</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Nav
