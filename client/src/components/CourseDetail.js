import React from 'react';
import { Consumer } from '../Context'


const CourseDetail = ({match}) => {

    return (
        <Consumer>
            { context => {
                const results = context.courseList;
                console.log(results);
                console.log(match.params.id);
                let courseDetail = results.filter(course => course.id == match.params.id)
                console.log(courseDetail);
            return (
                <div class="course-details">
                    <div class="buttons">
                        <a class="button" href="update-course.html">Update Course</a>
                        <a class="button" href="#">Delete Course</a>
                        <a class="button" id="button-secondary" href="/courses/">Return to List</a>
                    </div>
                    
                    <div class="course-info">
                            <h4 class="course--label">Course</h4>
                            <h3 class="course-detail-title">{ courseDetail[0].title } </h3>
                        <div class="course--description">
                            <p>{ courseDetail[0].description }</p> 
                        </div>
                    </div>

                    <div class="grid-25 grid-right">
                        <div class="course-stats">
                            <div class="eta">
                                <h4>ESTIMATED TIME</h4>
                                <hr />
                                <h3>{ courseDetail[0].estimatedTime }</h3>
                            </div>
                            <div class="materials">
                                <h4>MATERIALS</h4>
                                <hr />
                                <ul>
                                <li>{ courseDetail[0].materialsNeeded} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
      
            )

        }}
        </Consumer>

    );
    }
export default CourseDetail;

// could add cookie to preserve state to fix refresh issue

