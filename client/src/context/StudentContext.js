import { createContext, useEffect, useState } from "react";

const StudentContext = createContext({});

const StudentProvider = ({ children }) => {
    const [ student, setStudent ] = useState([]);
    const [ studentList, setStudentList ] = useState([]);
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        fetch('/user')
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    setStudent(data)
                    data.error ? setLoggedIn(false) : setLoggedIn(true)
                })
            }
        })
    }, [])

    useEffect(() => {
        fetch('/students')
        .then(resp => resp.json())
        .then(data => {
            setStudentList(data)
        })
    }, [])

    const loginStudent = (student) => {
        setStudent(student);
        setCurrentUser(student);
        setLoggedIn(true);
    }

    const logoutStudent = () => {
        setStudent({});
        setCurrentUser(null);
        setLoggedIn(false);
    }

    const addStudent = (student) => {
        setStudent(student);
        setLoggedIn(true);
    }

    return (
        <StudentContext.Provider value={{ student, loggedIn, currentUser, loginStudent, logoutStudent, addStudent, studentList, setStudentList  }}>{ children }</StudentContext.Provider>
    )
}

export { StudentContext, StudentProvider }