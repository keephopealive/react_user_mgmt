const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const UserConstructor = require('../constructors/UserConstructor');

class UserForm extends React.Component {
    constructor(props){
        super(props);

        this.state = new UserConstructor();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.createUser(this.state);
        this.handleReset();
    }
    handleChange(event){
        let value = event.target.value;
        this.setState( () => new UserConstructor(value)) 
    }
    handleReset(){
        this.setState( () => new UserConstructor())
    }
    render(){
        return (
            <div>
                <h3>Create a new user</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input 
                            type="text" 
                            className="mdl-textfield__input"
                            name='first_name' 
                            id='first_name' 
                            value={this.state.first_name} 
                            onChange={this.handleChange}
                        />
                        <label className="mdl-textfield__label" htmlFor="first_name">First Name</label>
                    </div>
                    
                    <input 
                        type="submit" 
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                    />
                </form>
            </div>
        )
    }
}
UserForm.propTypes = {
    createUser: PropTypes.func.isRequired
}

module.exports = UserForm;