function CourseList({ courses }) {


    return (
        <div className="card-div">
            <h3>REGISTER FOR CLASS</h3>
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
                        <td><button className="course-btn">Register</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default CourseList;