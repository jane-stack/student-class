import { createContext, useEffect, useState } from "react";

const CourseContext = createContext([]);

const CourseProvider = ({ children }) => {
    const [ courses, setCourses ] = useState([]);

    useEffect(() => {
        fetch('/courses')
        .then(resp => resp.json())
        .then(courses => setCourses(courses))
    }, [])
    
    return (
        <CourseContext.Provider value={{ courses, setCourses }}>{ children }</CourseContext.Provider>
    )
}

export { CourseContext, CourseProvider }