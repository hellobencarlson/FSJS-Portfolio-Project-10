// A higher-order component (HOC) that shares 
// functionality across the components of the app. 
// This will let you reuse component logic and state. 
// Remember - "Context" is used in React when data 
// needs to be accessible by many components at
//  different nesting levels.

import React, { Component } from 'react';
import Data from './Data';
const Context = React.createContext();

// new instance of the Data class inside the constructor() method. 
// Assign it to a data property, with this.data:

export class Provider extends Component {

    state = {
        // auth starts as null bc not auth
        authenticatedUser: null
    };

    constructor() {
        super();
        this.data = new Data();
    }
    render() {
        // destructure to extract from state
        const { authenticatedUser } = this.state;

        // create value object to provide utility methods of class Data
        const value = {
            authenticatedUser,
            data: this.data,
            actions: {
                getCourses: this.getCourses,
                signIn: this.signIn
            }
        };


        return (
            // provider component provides state and shared actions with a value prop
              // value represents an object containing context to be shared
              <Context.Provider value={value} >
                  {this.props.children}
              </Context.Provider>    
          );


    }
   
    signIn = async (username, password) => {
        const user = await this.data.getUser(username, password);
        return user;
    }

    getCourses = async (courses) => {
        const courseList = await this.data.getCourses(courses);
        if (courseList !== null) {
            this.setState(() => {
                return {
                    courses: courseList,
                }

            });
        }
        return courseList;
    }

}

// withContext is higher-order function that
// wraps a component in context.consumer component
// a.k.a. subscribes to actions/context changes
export default function withContext(Component) {
    return function ContextComponent(props) {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} /> }
            </Context.Consumer>
        )
    }
}