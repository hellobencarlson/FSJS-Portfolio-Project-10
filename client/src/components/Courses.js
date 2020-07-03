import React, { Component } from 'react';


export default class Courses extends Component {

    state = {
        courses: [],
    }

    render() {
        const {
            courses
        } = this.state;
    
    
    return (
        <div>
             <div>
            { this.courses }
            </div>
            <div>
                { courses }
            </div>
        </div>
       
    )
    
    }




}

    // const results = props.data;
    // let courses = results.map(course =>
    //     <li>
    //     <a href={`/courses/${course.id}`}>
    //         {course.title}
    //     </a>
    //     </li>
    // );

//     return(
//         <div>
//              <ul>
//             {/* {courses} */}
//         </ul>
//         <p>
//            <a href="/create-course">
//                 Create a Course
//             </a>
//         </p>
//         </div>
//     );
// }

// export default CourseList;