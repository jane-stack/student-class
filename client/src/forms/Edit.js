import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function Edit({ student, editClick }) {
    const { studentList } = useContext(StudentContext);
    const [ firstName, setFirstName ] = useState(student.first_name);
    const [ lastName, setLastName ] = useState(student.last_name);
    const [ email, setEmail ] = useState(student.email);
    const [ password, setPassword ] = useState(student.password);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/students/${studentList.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => editClick(data))
    } 

    return (
<form className="post-form" onSubmit={handleSubmit}>
            <h2>Create a New Topic</h2>
            <div className="new-post">
            First Name: &nbsp;
            <input className="post-input" type="text" name="first_name" value={ firstName } onChange={ (e) => setFirstName(e.target.value) }/>
            Last Name: &nbsp;
            <input className="post-input" type="text" name="last_name" value={ lastName } onChange={ (e) => setLastName(e.target.value) }/>
            Email: &nbsp;
            <input className="post-input" type="text" name="email" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
            Password: &nbsp;
            <input className="post-input" type="text" name="password" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
            <button type="submit">Update</button>
            </div>
        </form>
    )
}

export default Edit;