import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

function CourseList() {
    const [ courses, setCourses ] = useState([]);

    useEffect(() => {
        fetch('/courses')
        .then(resp => resp.json())
        .then(courses => setCourses(courses))
    }, [])

    const onAddCourse = newCourse => {
        setCourses(courses => [...courses, newCourse])
    }

    // rendering all courses
    const renderCourse = courses.map(course => {
        return (
            <CourseCard 
                key={ course.id }
                course={ course }
                onAddCourse={onAddCourse}
            />
        )
    })

    return (
        <div>
        <ul>{ renderCourse }</ul>
        </div>
    )
}

export default CourseList;