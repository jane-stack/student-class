import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import CourseCard from "../components/CourseCard";

function StudentDetail ({ selectedStudent, courses }) {
    const { student } = useContext(StudentContext);
    const [ currentUser, setCurrentUser ] = useState(student);

        const renderCourses = courses.map(course => {
        return (
            <CourseCard
                key={course.id}
                course={course}
            />
        )
    })

    return (
        <aside className="card-div">
            <h1>{ selectedStudent.first_name }'s Classes</h1>
            <h5>Here are all student's registered classes</h5>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Teacher</th>
                        <th>Register</th>
                    </tr>
                </thead>
                {selectedStudent.courses.map(c => (
                    <tbody key={c.id}>
                        <td>{c.name}</td>
                        <td>{c.teacher}</td>
                        {selectedStudent.email === currentUser.email &&
                            <td><button className="course-btn">Unregister</button></td>
                        }
                    </tbody>
                ))}
                <br></br>
                {selectedStudent.email === currentUser.email &&
                <>
                <h3>REGISTER FOR CLASS</h3>
                <thead>   
                    <th>Class</th>
                    <th>Teacher</th>
                    <th>Register</th>
                </thead>
                {renderCourses}
                </>
                }
                <br></br>
        </aside>
    )
}

export default StudentDetail;