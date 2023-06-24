import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { ErrorsContext } from "../context/ErrorsContext";
import { useHistory } from "react-router-dom";
import Errors from "../errors/Errors";

function LoginForm() {
    const { loginStudent, loggedIn } = useContext(StudentContext);
    const { setErrors } = useContext(ErrorsContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useHistory();

    useEffect(() => {
        if (loggedIn) {
            navigate.push("/home")
        } else {
            return (
                setErrors([])
            )
        }
    }, [loggedIn, navigate, setErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setEmail("");
                setPassword("");
            } else {
                loginStudent(data);
                setErrors([]);
                navigate.push("/home")
            }
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Login to Student Account</h3>
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
            <button type="submit">Log In</button>
            <Errors />
        </form>
    )
}

export default LoginForm;