import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// import statements
import './App.css';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import Header from './components/Header';
import NotFound from './components/NotFound';
import CreateCourse from './components/CreateCourse';

export default class App extends Component {


  render() {

    return (
            <BrowserRouter>
              <Header />
              <Switch>
                <Route exact path="/courses/" component={Courses} />
                <Route path="/courses/:id" component={CourseDetail} />
                <Route exact path="/createcourse" component={CreateCourse} />
                <Route component={NotFound} />
              </Switch>

            </BrowserRouter>
    )
   }

}
