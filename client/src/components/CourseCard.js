function CourseCard({ course }) {

    // const onRegister = () => {
    //     onAddCourse(course.id)
    // }

    return (
        <div className="card-div">
            <ul>
            <p>{ course.name }</p>
            <p className="teacher-text">{ course.teacher }</p>
            <button>Register</button>
            </ul>
        </div>
    )
}

export default CourseCard;