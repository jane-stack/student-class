// import { useContext } from "react";
// import { StudentContext } from '../context/StudentContext'  

// function Home () {
//     const { student } = useContext(StudentContext);

//     return (
//         <aside className="card-div">
//             <h1>{ student.first_name }'s Classes</h1>
//             <h5>Here are all student's registered classes</h5>
//             {/* <div>{myClass.length === 0 && <div>No registered Classes</div>}</div> */}
//                 <thead>
//                     <tr>
//                         <th>Class</th>
//                         <th>Teacher</th>
//                         <th>Register</th>
//                     </tr>
//                 </thead>
//                 {student.courses.map(course => (
//                     <tbody key={course.id}>
//                         <td>{course.name}</td>
//                         <td>{course.teacher}</td>
//                         <td><button className="course-btn">Unregister</button></td>
//                     </tbody>
//                 ))}
//         </aside>
//     )
// }

// export default Home;