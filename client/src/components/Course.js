import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => (
    <div class="grid-33">
        <h4 class="course--label">Course</h4>
        <Link   
            to={{
                pathname:`/courses/${props.id}`
            }}
            className="course--module course--link"
        >
          <h3 class="course--title">{props.title}</h3>  
        </Link>
  </div>
 
);

export default Course;