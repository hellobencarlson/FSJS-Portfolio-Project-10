import React from 'react';


const CourseList = props => {

    const results = props.data;
    let courses = results.map(course =>
        <li>
        <a href={`/courses/${course.id}`}>
            {course.title}
        </a>
        </li>
    );

    return(
        <div>
             <ul>
            {courses}
        </ul>
        <p>
           <a href="/create-course">
                Create a Course
            </a>
        </p>
        </div>
    );
}

export default CourseList;