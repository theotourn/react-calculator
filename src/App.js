import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  const clear = () => {
    setResult('');
  }

  return (
    <div style={{backgroundColor: "#151515"}}>
      <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className="calculator rounded bg-dark p-3">
          <div className="d-flex justify-content-center mb-3">
            <div className="btn btn-secondary h-4 w-100" onClick={clear}>{result || '0'}</div>
          </div>
          <div className="keypad">
            <div className="d-flex justify-content-between mb-3">
              <button name="7" className='btn btn-primary me-2 btn-block' onClick={handleClick}>7</button>
              <button name="8" className='btn btn-primary me-2 btn-block' onClick={handleClick}>8</button>
              <button name="9" className='btn btn-primary me-2 btn-block' onClick={handleClick}>9</button>
              <button name="+" className='btn btn-warning btn-block' onClick={handleClick}>+</button>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <button name="4" className='btn btn-primary btn-block' onClick={handleClick}>4</button>
              <button name="5" className='btn btn-primary btn-block' onClick={handleClick}>5</button>
              <button name="6" className='btn btn-primary btn-block' onClick={handleClick}>6</button>
              <button name="-" className='btn btn-warning btn-block' onClick={handleClick}>-</button>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <button name="1" className='btn btn-primary btn-block' onClick={handleClick}>1</button>
              <button name="2" className='btn btn-primary btn-block' onClick={handleClick}>2</button>
              <button name="3" className='btn btn-primary btn-block' onClick={handleClick}>3</button>
              <button name="*" className='btn btn-warning btn-block' onClick={handleClick}>*</button>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-danger operator btn-block" onClick={clear}>C</button>
              <button name="0" className='btn btn-primary btn-block' onClick={handleClick}>0</button>
              <button name="/" className='btn btn-warning btn-block' onClick={handleClick}>/</button>
              <button className="btn btn-success equal btn-block" onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
