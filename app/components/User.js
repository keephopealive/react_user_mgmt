const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const UserForm = require('./UserForm');
const UserList = require('./UserList');
const UserConstructor = require('../constructors/UserConstructor');

class User extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            users: []
        }

        this.createUser = this.createUser.bind(this);
    }
    createUser(newUser){
        event.preventDefault();
        let users = this.state.users;
        users.push(new UserConstructor(newUser.first_name));
        this.setState( () => {
            return { users: users }
        });
    }
    render(){
        return (
            <div>
                <UserForm createUser={this.createUser} />
                <UserList users={this.state.users} />
            </div>
        )
    }
}
module.exports = User;