// import { useContext } from "react";
// import { StudentContext } from "../context/StudentContext";


// function AddCourse({ course, name, teacher, addRegister }) {
//     const { student } = useContext(StudentContext);

//     const registerCourse = (courseId) => {
//         fetch(`students/${student.id}/registers/${course.id}`, {
//             method: "POST",
//             headers: {'Content-Type': "application/json"},
//             body: JSON.stringify({course_id: courseId})
//         })
//         .then(resp => resp.json())
//         .then(data => addRegister(console.log(data)))
//     }
 
//     return (
//         <div>
//             <h5>{ name }</h5>
//             <p>{ teacher }</p>
//             <button className="course-btn" onClick={registerCourse}>Register</button>
//             <hr />
//         </div>
//     )
// }

// export default AddCourse;