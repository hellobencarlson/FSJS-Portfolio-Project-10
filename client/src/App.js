// Renders the router that wraps the components 
// of the app.

import React from 'react';
import './App.css';
 
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import withContext from './Context';

const CourseswithContext = withContext(Courses);
const HeaderwithContext = withContext(Header);
const UserSignUpwithContext = withContext(UserSignUp);
const UserSignInwithContext = withContext(UserSignIn);

// export default class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       courses: []
//     };
//   }

//   componentDidMount() {
//     fetch('http://localhost:5000/api/courses')
//       .then(response => response.json())
//       .then(responseData => {
//         this.setState({ courses: responseData.courses });
//       })
//       .catch(error => {
//         console.log("Fetch error", error);
//       })
//   }

//   render() {
//     console.log(this.state.courses)
//     return (
//       <div>
//           <Courses data={this.state.courses} />
//       </div>
//     )
//   }

// }

export default () => (
  <Router>
    <div>
      {/* <HeaderwithContext />  */}
      <Switch>
        <Route exact path="/" component={CourseswithContext} />
        <Route path="/courses/:id" component={CourseDetail} />
        <Route path="/signup" component={UserSignUpwithContext} />
        <Route path="/signin" component={UserSignInwithContext} />
        {/*  <Route path="/courses/create" component={} />
        <Route path="/courses/:id/update" component={} />
        <Route path="/signout" component={} />  */}
      </Switch>
    </div>
  </Router>
)