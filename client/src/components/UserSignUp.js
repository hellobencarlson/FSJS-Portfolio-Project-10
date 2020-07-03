import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Form from './Form';

export default class UserSignUp extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        errors: [],
    }

    render() {
        const {
            name, 
            username,
            password,
            errors,
        } = this.state;
    

        return (

        <div>
            <h1>Sign Up</h1>
            <form>
                <input type="text" id="name" value={name} placeholder="Name" ></input>
                <input type="text" id="username" value={username} placeholder="Username" ></input>
                <input type="text" id="password" value={password} placeholder="Password" ></input>
            </form>
        </div>
        )
    }

}