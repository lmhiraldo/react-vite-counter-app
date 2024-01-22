import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value); //valor inicial del hook es 10

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c)=> c+1)
  };

  const handleRemove = () => {
    setCounter(counter - 1);
    //setCounter((c)=> c+1)
  };

  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRemove}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number,
};
