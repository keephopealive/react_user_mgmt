const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const User = require('./User');

class App extends React.Component {
    render(){
        return (
            <div className="mdl-grid" >
                <User/>
            </div>
        )
    }
}
module.exports = App;