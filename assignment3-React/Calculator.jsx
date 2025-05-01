import React, { useState } from "react";
import "./Calculator.css";
/* eslint-disable no-eval */
export default function Calculator() {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <input type="button" value="AC" onClick={(e) => setValue("")} />
              <input
                type="button"
                value="DE"
                onClick={(e) => setValue(value.slice(0, -1))}
              />
              <input
                type="button"
                value="."
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="/"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="e"
                onClick={(e) => setValue(value + Math.E)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="*"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="tan"
                onClick={() => setValue(Math.tan(eval(value)))}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="+"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="cos"
                onClick={() => setValue(Math.cos(eval(value)))}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="-"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="sin"
                onClick={() => setValue(Math.sin(eval(value)))}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="0"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="("
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value=")"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="%"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="x²"
                onClick={() => setValue(Math.pow(eval(value), 2).toString())}
              />
              <input
                type="button"
                value="1/x"
                onClick={() => setValue((1 / eval(value)).toString())}
              />
              <input
                type="button"
                value="x³"
                onClick={(e) => setValue(Math.pow(eval(value), 3).toString())}
              />
    
              <input
                type="button"
                value="^"
                onClick={(e) => setValue(value + "**")}
              />
              <input
                type="button"
                value="="
                onClick={(e) => setValue(eval(value))}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
