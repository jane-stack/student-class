function CourseCard({ course }) {

    return (
        <div className="card-div">
            <p>{ course.name }</p>
            <p>{ course.teacher }</p>
        </div>
    )
}

export default CourseCard;