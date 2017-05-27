const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const UserConstructor = require('../constructors/UserConstructor');

function UserList(props) {
    return (
        <div>
            <h3>Current users on the list</h3>
            {props.users.length < 1 && <p>The list is currently empty...</p>}
            <ul className="demo-list-icon mdl-list">
                {props.users.map( (user, index) => {
                    return (
                        <li  
                        className="mdl-list__item" 
                        key={index}>
                            <span className="mdl-list__item-primary-content">
                                <i className="material-icons mdl-list__item-icon">person</i>
                                {user.first_name}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.instanceOf(UserConstructor)).isRequired
}
module.exports = UserList;