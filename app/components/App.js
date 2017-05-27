const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const User = require('./User');

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Link = require('react-router-dom').Link;
const Switch = require('react-router-dom').Switch;
const Nav = require('./Nav');

const queryString = require('query-string');


function Sample(props){
    return (
        <div>
            <h3>Sample</h3>
            <Link to='/user'>User</Link>
        </div>
    );
}

class UserDetails extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params)
        //queryString.parse(this.props.match.params);
    }
    render(){
        console.log(this.props.match.params)
        return (
            <div>
                <h3>User Details</h3>
               {this.props.match.params.id}
            </div>
        )
    }
}

function App() {
    return (
        <Router>
            <div className="mdl-grid" >
                <Nav/>
                <Switch>
                    <Route path='/user' component={User} />
                    <Route path='/sample' component={Sample} />
                    <Route render={()=> <h4>Page not found.</h4> } />
                </Switch>
            </div>
        </Router>
    )
}
module.exports = App;