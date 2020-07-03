import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
     
        // auth state from this.props.context.authenticatedUser        
        // extract context from this.props
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        return (
            <div class="App-header">
                <h1>App</h1>
                <nav>
                   { authUser ?
                        <React.Fragment>
                            <span>Welcome, {authUser.name}!</span>
                            <Link to="/signout">Sign Out</Link>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/signin">Sign In</Link>
                        </React.Fragment>
                    }
                </nav>
            </div>
        )
    }
}