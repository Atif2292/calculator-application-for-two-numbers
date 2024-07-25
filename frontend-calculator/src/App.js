import React, { useState } from 'react';
import './App.css';

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState('add');

    const handleOperation = async () => {
        const response = await fetch(`http://localhost:8080/${operation}?num1=${num1}&num2=${num2}`);
        const data = await response.json();
        setResult(data);
    };

    return (
        <div className="App">
            <h1>Calculator Web Application for two numbers</h1>
            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="add">Add</option>
                    <option value="subtract">Subtract</option>
                    <option value="multiply">Multiply</option>
                    <option value="divide">Divide</option>
                </select>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <button onClick={handleOperation}>Calculate</button>
            </div>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
}

export default App;
