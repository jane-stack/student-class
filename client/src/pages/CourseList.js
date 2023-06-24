import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";

function CourseList() {
    const { courses, setCourses } = useContext(CourseContext)

    return (
        <div><CourseCard /></div>
    )
}

export default CourseList;