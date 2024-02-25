import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center m-20 p-20">
            <h1 className="text-4xl m-5">OOPs, not found - 404</h1>
            <button className="btn btn-success"><NavLink to="/home">Go Back to Home </NavLink></button>
        </div>
    );
};

export default Error;