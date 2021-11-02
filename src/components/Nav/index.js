import React from 'react'
 // eslint-disable-next-line
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
                <Link to="/Contact"  className="link">favorit</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Nav ;
