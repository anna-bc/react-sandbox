import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import Result from "./components/Result/Result";
import NumPad from "./components/NumPad/NumPad";
import OperatorPad from "./components/OperatorPad/OperatorPad";

function App() {
  const [resultString, setResultString] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div className="calcWrapper">
      <div className="leftSide">
        <Result string={resultString} />
        <NumPad addToString={(num) => {
          console.log("app handle click");
          let string = '' + num;
          setResultString(resultString + string);
        }} />
      </div>
      <div className="rightSide">
        <OperatorPad addToString={(op) => {
          console.log("app handle click");
          let string = '' + op;
          setResultString(resultString + string);
        }} />
      </div>
    </div>
  );
}

export default App;
