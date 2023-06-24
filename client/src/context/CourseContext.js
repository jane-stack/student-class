import { createContext, useEffect, useState } from "react";

const CourseContext = createContext({ children });
const [ courses, setCourses ] = useState([]);

useEffect(() => {
    fetch('/courses')
    .then(resp => resp.json())
    .then(courses => setCourses(courses))
}, [])

const CourseProvider = () => {
    return (
        <CourseContext.Provider value={{ courses, setCourses }}>{ children }</CourseContext.Provider>
    )
}

export { CourseContext, CourseProvider }