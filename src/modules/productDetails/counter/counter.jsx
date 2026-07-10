import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [add, setAdd] = useState(0);

  return (
    <div className="d-flex align-items-center gap-4 buttons-container">
      <button className="button" onClick={() => setAdd( add >= 1 ? add - 1: add)}>
        -
      </button>
      <div className="number-counter">{add}</div>
      <button className="button" onClick={() => setAdd(add + 1)}>
        +
      </button>
    </div>
  );
};
export default Counter;
