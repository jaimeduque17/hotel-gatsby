import React from 'react'
import {Link} from 'gatsby'

const Navigation = () => {
    return ( 
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About us</Link>
        </nav>
    )
}
 
export default Navigation