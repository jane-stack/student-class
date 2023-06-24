import { useContext } from "react";
import { ErrorsContext } from "../context/ErrorsContext";

function Errors() {
    const { errors } = useContext(ErrorsContext);

    const errorList = errors.map((error, idx) => <p key={idx}>{ error }</p>)

    return (
        <div>{ errorList }</div>
    )
}

export default Errors;