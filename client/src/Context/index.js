import React, { Component } from 'react';
// import Data from '../Data';
import config from '../components/config';

const Context = React.createContext(); 

export class Provider extends Component {

  constructor() {
    super();
    this.state = {
        courseList: []
    };
}

componentDidMount() {
    this.performSearch();
}

performSearch = () => {
    fetch(config.apiUrl + '/courses/')
    .then(response => response.json())
    .then(responseData => {
        this.setState({
            courseList: responseData.courses
        })
    })
}

  render() {

    const value = {
        courseList: this.state.courseList
      };
      
    return (    
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

}

// withContext higher order fxn
  export default function withContext(Component) {
    return function ContextComponent(props) {
      return (
        <Context.Consumer>
          {context => <Component {...props} context={context} />}
        </Context.Consumer>
      );
    }
  }
  
  export const Consumer = Context.Consumer;
  
