import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCourse from "../components/StudentCourse";

function Home() {
    const { students } = useContext(StudentContext);
    const student = students.courses.map(student => <StudentCourse key={student.id} student={student} />)

    return (
        <div>
            <h1 className="App">Welcome { students.first_name }!</h1>
            <h5>You are visiting Tuyen's phase four StudentAccount project</h5>
            <div className="home-page">
            <h2>My Clases:</h2>
            { student }
            </div>
        </div>
    )
}

export default Home;