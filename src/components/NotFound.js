import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <h1 className="display-4 text-danger">404</h1>
            <p className="lead">Page Not Found</p>
            <Link to="/" className="btn btn-primary mt-3">Go Back Home</Link>
        </div>
    );
};

export default NotFound;
