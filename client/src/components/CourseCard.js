function CourseCard ({ course }) {

    return (
        <div className="card-div">
                <tbody>
                    <td>{course.name}</td>
                    <td>{course.teacher}</td>
                    <td><button className="course-btn">Register</button></td>
                </tbody>
        </div>
    )
}

export default CourseCard;