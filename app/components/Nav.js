const React = require('react');
// const Link = require('react-router-dom').Link;
const NavLink = require('react-router-dom').NavLink;

function Nav(){
    return (
        <ul className='nav'>
           <li>
                <NavLink exact activeClassName='active' to='/user'>User</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName='active' to='/sample'>Sample</NavLink>
            </li>
        </ul>
    )
}
module.exports = Nav;