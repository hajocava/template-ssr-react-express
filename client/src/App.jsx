import React from 'react';
import { hot } from 'react-hot-loader/root'
import { Routes, Route } from "react-router-dom";
import { Counter } from './components/counter';
import { Other } from './components/other';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/other-route" element={<Other />} />
        </Routes>
    );
};

export default hot(App)
