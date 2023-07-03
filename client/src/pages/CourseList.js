import React from "react";
import Students from "./Students";
import CourseCard from "../components/CourseCard";


function CourseList({ courses, students, handleClick }) {

    const renderCourses = courses.map(course => {
        return (
            <CourseCard
                key={course.id}
                course={course}
            />
        )
    })
    
    const renderStudents = students.map(student => {
        return (
            <Students
                key={student.id}
                student={student}
                handleClick={handleClick}
            />
        )
    })

    return (
        <div className="card-div">
            <h3>REGISTER FOR CLASS</h3>
            <thead>   
                    <th>Class</th>
                    <th>Teacher</th>
                    <th>Register</th>
            </thead>
            {renderCourses}
            <hr/>
            <h3>STUDENTS</h3>
            <thead>   
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Classes</th>
            </thead>
            {renderStudents}
               
        </div>
    )
}

export default CourseList;