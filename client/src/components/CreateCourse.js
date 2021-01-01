import React from 'react';

const CreateCourse = () => (


    <div class="bounds course--detail">
        <h1>Create Course</h1>
            <div class="validation">
                <h4>Validation Errors</h4>
                <div class="title-invalid">
                    <p>Please provide a value for "Title"</p>
                </div>
                <div class="description">
                    <p>Please provide a value for "Description"</p>
                </div>
            </div>
          <form>   
            <div class="name-description">
                <h4 class="course--label">Course</h4>
                <div>
                    <input id="title" name="title" type="text" class="input-title course--title--input" placeholder="Course title..."
                    value="">
                    </input>
                </div>
                <p>By (USER HERE)</p>
                <div class="course-description">
                    <textarea id="description" name="description" class="" placeholder="Course description..."></textarea>
                </div>
            </div>
               
           
            <div class="time-materials">
                    <p>ESTIMATED TIME</p>
                    <hr />
                    <div>
                        <input id="estimatedTime" name="estimatedTime" type="text" class="course--time--input"
                        placeholder="Hours" value=""></input>
                    </div>
                
                    <p>MATERIALS NEEDED</p>
                    <hr />
                    <div>
                        <textarea id="materialsNeeded" name="materialsNeeded" class="" placeholder="List materials..."></textarea>
                    </div>
           
              </div>
   
            <div class="pad-bottom">
                <button class="button-2" type="submit">Create Course</button>
                <button class="button-2" id="button-secondary-2" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
        </form>
    </div>
 
 
);

export default CreateCourse;