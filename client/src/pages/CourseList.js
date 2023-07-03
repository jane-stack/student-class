import React from "react";
import Students from "./Students";


function CourseList({ students, handleClick }) {
    
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