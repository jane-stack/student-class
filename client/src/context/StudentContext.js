import { createContext, useEffect, useState } from "react";

const StudentContext = createContext({});
const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch('/user')
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    setStudents(data)
                    data.error ? setLoggedIn(false) : setLoggedIn(true)
                })
            }
        })
    }, [])

    const loginStudent = (student) => {
        setStudents(student);
        setCurrentUser(student);
        setLoggedIn(true);
    }

    const logoutStudent = () => {
        setStudents({});
        setCurrentUser(null);
        setLoggedIn(false);
    }

    const addStudent = (student) => {
        setStudents(student);
        setLoggedIn(true);
    }

    return (
        <StudentContext.Provider value={{ students, loggedIn, currentUser, loginStudent, logoutStudent, addStudent  }}>{ children }</StudentContext.Provider>
    )
}

export { StudentContext, StudentProvider }