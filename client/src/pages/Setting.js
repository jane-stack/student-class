import { useContext} from "react";
import { StudentContext } from "../context/StudentContext";

function Setting() {
    const { student } = useContext(StudentContext)

    const editClick = (updated) => {
        if (updated.id === student.id) {
            return updated
        } else {
            return student
        }
    }

    return (
        <div>
            <h4>{ student.last_name }, { student.first_name }</h4>
            <h4>{ student.email }</h4>
            <h4>Password: **************</h4>
            <button onClick={editClick}>Edit</button>
        </div>
    )
}

export default Setting;