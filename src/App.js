import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Be careful with eval in production
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="app">
      <div className="calculator"> 
      <h1>REACT CALCULATOR</h1>
        <Display input={input} result={result} />
        <div className="button-container">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((button) => (
            <Button key={button} value={button} onClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
