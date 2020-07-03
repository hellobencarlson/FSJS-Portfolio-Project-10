import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// form

export default class UserSignIn extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        const {
            username,
            password
        } = this.state;
        console.log(this.props);

        return (
           <div>
             <h1>Sign In</h1>  
           </div>     

        )


    }

    submit = () => {
      const { context } = this.props;
      const { username, password } = this.state;
      // call the signin in function from Context actions
      context.actions.signIn(username, password)
        .then( user => {
            if (user === null) {
                this.setState(() => {
                    return { errors: [ 'Sign-in failure'] };
                });
            } else {
                // push to authenticated route
                this.props.history.push('/authenticated');
                console.log('sign in successful');
            }
        })
    }



}