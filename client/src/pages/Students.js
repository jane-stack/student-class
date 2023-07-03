import { NavLink } from "react-router-dom";

function Students ({ student, handleClick }) {

    return (
        <div>
            <tbody>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td><button className="course-btn" onClick={() => handleClick(student)}><NavLink to={`/students/${student.id}/registers`}>View Courses</NavLink></button></td>
            </tbody>
        </div>
    )
}

export default Students;