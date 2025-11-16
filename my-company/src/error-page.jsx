//Error Handling
import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom"

const ErrorHandle = () => {
    const error = useRouteError();

    // handling other errors
    // if (!error) {
    //     console.log("Whooa, something happened, if not resolved by now please contact service provider!.")
    // } else {
    //     console.error("This page does not exist", error);
    // }

    return (
        <div className="error-page">
            <h1>Opps!</h1>
            <p>Whooa, something happened an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.messege}</i>
            </p>
            <Link to="/">Home</Link>
        </div>
    )
}
export default ErrorHandle;