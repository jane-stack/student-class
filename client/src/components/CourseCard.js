function CourseCard ({ course }) {

    return (
        <tbody>
            <td>{course.name}</td>
            <td>{course.teacher}</td>
            <td><button className="course-btn">Register</button></td>
        </tbody>
    )
}

export default CourseCard;