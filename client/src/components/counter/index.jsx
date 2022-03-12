import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import reactLogo from '../../assets/react-logo.png'
import "./styles.css"

export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1)
    const { width } = useWindowDimensions()

    return (
        <div>
            <Helmet>
                <title>Title Changed With Helmet</title>
            </Helmet>
            
            <h1 style={{
                color: width < 768 ? 'red' : 'blue'
            }}>
                Counter: {count}
            </h1>
            <img src={reactLogo} alt="React" />
            <button onClick={handleClick}>
                Increment counter
            </button>
            <Link to="/other-route">Go to other route with react router</Link>
        </div>
    )
}
