import { useState, useEffect, useContext } from "react";
// import CourseCard from "../components/CourseCard";
import { StudentContext } from "../context/StudentContext";

function CourseList() {
    const { students, setStudents } = useContext(StudentContext);
    const [ courses, setCourses ] = useState([]);


    useEffect(() => {
        fetch('/courses')
        .then(resp => resp.json())
        .then(courses => setCourses(courses))
    }, [])

    // handle add course
    const onAddClass = (newClass) => {
        setStudents({ ...students.courses, newClass})
    }

    // rendering all courses
    // const renderCourse = courses.map(course => {
    //     return (
    //         <CourseCard 
    //             key={ course.id }
    //             course={ course }
    //             onAddClass={onAddClass}
    //         />
    //     )
    // })

    return (
        <div className="card-div">
            <table>
                <tr>
                    <th>Class</th>
                    <th>Teacher</th>
                    <th>Register</th>
                </tr>
                {courses.map(course => (
                    <tr key={ course.id }>
                        <td>{ course.name }</td>
                        <td>{ course.teacher }</td>
                        <td><button>Add Class</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default CourseList;