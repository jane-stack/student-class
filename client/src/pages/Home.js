import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Home() {
    const { students } = useContext(StudentContext);

    return (
        <div>
            <h1 className="App">Welcome { students.first_name }!</h1>
            <h5>You are visiting Tuyen's phase four StudentAccount project</h5>
            <div className="home-page">
            <h2>Requirements:</h2>
            <p>Ruby Version 2.7.4</p>
            <p>NodeJS (v16), and npm</p>
            <p>Postgresql</p>
            <p>React-Router-Dom@5</p>
            </div>
            <br/>
            <div className="home-page">
            <h2>Getting Started:</h2>
            <p>Install Ruby</p>
            <p>Install NodeJS</p>
            <p>Install Postgresql</p>
            </div>
            <br/>
            <div className="home-page">
            <h2>Meeting Requirements:</h2>
            <p>Using a Rails API backend with a React frontend</p>
            <p>Backend includes three models implementing a many-to-many association with a joined table that includes a user_id and a topic_id.</p>
            <p>The backend follows RESTful routing convention.</p>
            <p>
            Users are able to sign up with a new account, log in with a secure password and stay logged in. In order to successfully create a users account, a user must choose a username and must choose a password that validates. Password must be at least 8 characters. Password must include a capital letter, a lowercase letter, a number, and a special character. Error messages will be passed upon violation of the validations.
            </p>
            <p>
            Users are able to create, edit, and delete their topics. Topic title and description cannot be empty. Error messages will be passed upon violation of the validations.
            </p>
            <p>
            Comments in the chat space can also be created, edited, and deleted. Users cannot post an empty comment. Error messages will be passed upon violation of the validation.
            </p>
            <p>
            React hook useContext is used to presist the logged in user object in the front end state.
            </p>
            </div>
            <br/>
            <br/><br/><br/><br/><br/>
        </div>
    )
}

export default Home;