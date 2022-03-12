import React from 'react'
import { Link } from "react-router-dom";
import "./styles.sass"

export const Other = () => {
    return (
        <div>
            <h1>{process.env.REACT_ENVIRONMENT_EXAMPLE}</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}
