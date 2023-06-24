import { useContext, useEffect, useState } from "react";
import { ErrorsContext } from "../context/ErrorsContext";
import { StudentContext } from "../context/StudentContext";
import { useHistory } from "react-router-dom";
import Errors from "../errors/Errors";

function SignupForm() {
    const { setErrors } = useContext(ErrorsContext);
    const { addStudent, loginStudent, loggedIn } = useContext(StudentContext);
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useHistory();

    useEffect(() => {
        if (loggedIn) {
            navigate.push('/home')
        } else {
            return (
                setErrors([])
            )
        }
    }, [ loggedIn, navigate, setErrors ])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, password })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
            } else {
                addStudent(data);
                loginStudent(data);
                navigate.push('/home');
            }
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Create an Account</h3>
            <div>
            First Name &nbsp;
            <input
            type="text"
            name="first_name"
            id="first_name"
            value={firstName}
            onChange={ (e) => setFirstName(e.target.value) }
            required={true}
            />
            </div>
            <div>
            Last Name &nbsp;
            <input
            type="text"
            name="last_name"
            id="last_name"
            value={lastName}
            onChange={ (e) => setLastName(e.target.value) }
            required={true}
            />
            </div>
            <div>
            Email &nbsp;
            <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            required={true}
            />
            </div>
            <div>
            Password &nbsp;
            <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
            required={true}
            />
            </div>
            <button type="submit">Signup</button>
            <Errors />
        </form>
    )
}

export default SignupForm;