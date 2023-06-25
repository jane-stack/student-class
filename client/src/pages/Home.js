import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";


function Home() {
    const { students } = useContext(StudentContext);

    return (
        <div className="card-div">
            <h1>Welcome { students.first_name }</h1>
            <h5>Here are all your registered classes</h5>
            <table>
                <tr>
                    <th>Class</th>
                    <th>Teacher</th>
                    <th>Register</th>
                </tr>
                {students.courses.map(student => (
                    <tr key={ student.id }>
                        <td>{ student.name }</td>
                        <td>{ student.teacher }</td>
                        <td><button className="course-btn">Remove</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Home;